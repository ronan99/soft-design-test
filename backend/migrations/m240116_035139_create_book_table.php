<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%book}}`.
 */
class m240116_035139_create_book_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%book}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(256)->notNull(),
            'description' => $this->string(256)->notNull(),
            'author' => $this->string(256)->notNull(),
            'pages' => $this->string(256)->notNull(),
            'deleted' => $this->boolean()->defaultValue(false),
            'created_at' => $this->integer(),
            'updated_at' => $this->integer(),
        ]);

        $this->insert("book", [
            "title" => "1984",
            "description" => "Guerra e guerra e guerra",
            "author" => "George Orwell",
            "pages" => "1000",
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%book}}');
    }
}
