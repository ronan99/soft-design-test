<?php

namespace app\controllers;


use app\models\User;
use Yii;
use yii\rest\Controller;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;

class UserController extends Controller
{
    public $modelClass = User::class;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => CompositeAuth::class,
            'authMethods' => [
                HttpBearerAuth::class,
            ],
            "except" => ["login"]
        ];
        return $behaviors;
    }
    public function actionLogin()
    {
        $model = new User();
        $model->attributes = Yii::$app->request->post();
        if ($user = $model->login()) {
            // Generate and return a token
            $token = $user->generateToken();
            return ['token' => $token];
        } else {
            Yii::$app->response->statusCode = 401;
            return ['message' => 'Credenciais inválidas'];
        }
    }

    public function actionIsLogged(){
        Yii::$app->response->statusCode = 200;
        return [
            "succes" => true,
            "message" => "Logado"
        ];
    }

    public function actionLogout(){
        Yii::$app->user->logout();
    }


}
