<?php

namespace app\models;

use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;

class Book extends ActiveRecord
{

    public function rules(){
        return [
            [["title", "description", "author", "pages"], "required"]
            ];
    }
    public function behaviors(){

        return [TimestampBehavior::class];
    }


}
