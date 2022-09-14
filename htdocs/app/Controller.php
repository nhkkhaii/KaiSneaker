<?php 
    class Controller{
        public function __construct()
        {
            // require_once './database/Database.php';
            // new Database();
        }
        public function model($model)
        {
            require_once './database/'.$model.'.php';
            return new $model();
        }
    }
?>