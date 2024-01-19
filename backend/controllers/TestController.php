<?php

namespace app\controllers;

use Yii;
use yii\web\Controller;

class TestController extends Controller
{
    public function actionIndex()
    {
        try {
            Yii::$app->db->open();
            echo 'Database connection successful.';
        } catch (\Exception $e) {
            echo 'Database connection error: ' . $e->getMessage();
        }
    }
}