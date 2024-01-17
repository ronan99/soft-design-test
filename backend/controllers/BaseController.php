<?php
namespace app\controllers;
use app\models\Book;
use yii\rest\Controller;
class BaseController extends Controller {

    public $modelClass = Book::class;

    public function actionCreate(){
        
    }

    public function behaviors() {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator'] = [
            'class' => 'yii\filters\ContentNegotiator',
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
            ]
        ];
        return $behaviors;
    }
}