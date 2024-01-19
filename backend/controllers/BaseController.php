<?php
namespace app\controllers;
use app\models\Book;
use yii\rest\Controller;
class BaseController extends Controller {

    public $enableCsrfValidation = false;

    public static function allowedDomains()
{
    return [
        '*',                        // star allows all domains

    ];
}
    public function behaviors() {
        $behaviors = parent::behaviors();

        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);

        $behaviors['contentNegotiator'] = [
            'class' => 'yii\filters\ContentNegotiator',
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
            ]
        ];
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::class,
            'cors'  => [
                'Origin' => static::allowedDomains(),
            // Allow only POST and PUT methods
                'Access-Control-Request-Method' => ['POST'],

                'Access-Control-Allow-Credentials' => false,
                // Allow OPTIONS caching
                'Access-Control-Max-Age' => 3600,
            ],
        ];

        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        
        return $behaviors;
    }
}