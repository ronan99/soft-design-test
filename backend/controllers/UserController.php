<?php

namespace app\controllers;


use app\models\User;
use Yii;

class UserController extends BaseController
{
    public $modelClass = User::class;


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
            return ['error' => 'Invalid login credentials'];
        }
    }


}
