<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *"); 
    require_once './app/Controller.php';
    new Controller;
    function getURL()
    {
        return isset($_GET['url'])? explode('/',filter_var(trim($_GET['url']))):null;
    }
    //
   class config{
    public $class;
    public function __construct($arr)
    {
        
        if(isset($arr[0])){ //fun
            if(file_exists('api/controller/'.$arr[1].'.php')){
              require_once('api/controller/'.$arr[1].'.php');
              $this->class = new $arr[1];
            }else{
                echo 'Lỗi URL';
            }
            //call function
            if(isset($arr[1])|| method_exists($arr[1],$arr[2])){
              call_user_func([$this->class,isset($arr[2])?$arr[2]:'get']);
            }
           
          }
    }
   }
    //
   // MVC here
    //get method

    // print_r(getURL());
    
    new config(getURL());
    //database