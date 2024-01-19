<?php

use yii\db\Migration;
/**
 * Handles the creation of table `{{%user}}`.
 */
class m240116_051658_create_user_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%user}}', [
            'id' => $this->primaryKey(),
            'email' => $this->string(256)->notNull(),
            'password' => $this->string(256)->notNull(),
            'created_at' => $this->integer(),
            'updated_at' => $this->integer(),
            'access_token' => $this->string(1000),
            'auth_key' => $this->string(1000)
        ]);

        $this->insert('user', [
            'email' => "admin@test.com",
            'password' => \Yii::$app->getSecurity()->generatePasswordHash('123456789'),
            'created_at' => time(),
            'updated_at' => time(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%user}}');
    }
}
