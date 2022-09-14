<?php
class account extends Controller
{
    public $database;
    public $IDACCOUNT;
    public $IDSTATUS;
    public $USERNAME;
    public $PASSWORD;
    public $GENDER;
    public $CCCD;
    public $FULLNAME;
    public $EMAIL;
    public $NUMBERPHONE;
    public $DATEOFBIRTH;
    public $CREATEDATED;
    public $IMAGEUSER;

    public function __construct()
    {
        $this->database = $this->model('Database');
        $this->IDACCOUNT = $this->database->get_val_react("IDACCOUNT");
        $this->GENDER = $this->database->get_val_react("GENDER");
        $this->CCCD = $this->database->get_val_react("CCCD");
        $this->EMAIL = $this->database->get_val_react("EMAIL");
        $this->FULLNAME = $this->database->get_val_react("FULLNAME");
        $this->NUMBERPHONE = $this->database->get_val_react("NUMBERPHONE");
        $this->DATEOFBIRTH = $this->database->get_val_react("DATEOFBIRTH");
        $this->CREATEDATED = $this->database->get_val_react("CREATEDATED");
        $this->IMAGEUSER = $this->database->get_val_react("IMAGEUSER");
    }
    public function post()
    {
        switch($this->database->obj->type){
            case 'update':{
                $query = "update `account` SET `FULLNAME`='{$this->FULLNAME}',`GENDER`='{$this->GENDER}',`CCCD`='{$this->CCCD}',`EMAIL`='{$this->EMAIL}',`NUMBERPHONE`='{$this->NUMBERPHONE}',`DATEOFBIRTH`='{$this->DATEOFBIRTH}',`IMAGEUSER`='{$this->IMAGEUSER}' WHERE `IDACCOUNT`='{$this->IDACCOUNT}'";
                $this->database->ex_cmd($query);
                echo 1;
                break;
            }
            case 'get':{
                $query = "select * from account WHERE `IDACCOUNT`='{$this->IDACCOUNT}'";
                $this->database->cover_json($query);
                break;
            }
        }
    }
    public function get()
    {
        $db = $this->model('Database');
        $db->cover_json('select * from shoes');
    }
    public function signin()
    {
            $user = $this->database->get_val_react('USERNAME');
            $pass = md5($this->database->get_val_react('PASSWORD'));
            $query = "select * from account where 
            USERNAME = '{$user}' and PASSWORD = '{$pass}'";
            if ($this->database->check_query($query) == true) {
                $iduser =  $this->database->ex_assoc("IDACCOUNT",$query);
                $namestatus = md5($this->database->ex_assoc(
                    "STATUSNAME","select * from status s , account a where s.IDSTATUS = a.IDSTATUS and a.USERNAME = '{$user}'"));
                echo json_encode([
                    'id'=>$iduser,
                    'status'=>$namestatus
                ]);
                } else {
                echo 0;
            }
    }
    public function signup()
    {  
        $user = $this->database->get_val_react('USERNAME');
        $pass = $this->database->get_val_react('PASSWORD');
        if(!empty($user)||!empty($pass)){
            //check exist username
        $userid = $this->database->ex_assoc("IDSTATUS","select IDSTATUS from status where STATUSNAME = 'User'");
        if($this->database->check_query("select * from account where USERNAME = '{$user}'") == false){
            $query = "insert into account(USERNAME,PASSWORD,IDSTATUS) values('{$user}','".md5($pass)."',{$userid})";
            $this->database->ex_cmd($query);
            echo 1;
            }else{
            echo -1;
            }
        }
       
    }
    public function getImg()
    {
       $img = $this->database->get_val_react($this->database->obj,'img');
      print_r($img);
    }
}