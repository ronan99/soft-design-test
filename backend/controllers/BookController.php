<?php
namespace app\controllers;

use app\models\Book;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use Yii;
use yii\rest\ActiveController;

class BookController extends ActiveController{
    public $modelClass = Book::class;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['authenticator'] = [
            'class' => CompositeAuth::class,
            'authMethods' => [
                HttpBearerAuth::class,
            ],
        ];
        return $behaviors;
    }
    

}