<?php
    class Database{
        private $host = 'localhost';
        private $username = 'root';
        private $pass = '';
        private $db = 'db_store';
        public  $conn = null;
        public  $obj;
        public function __construct()
        {
            $this->conn = mysqli_connect($this->host,$this->username,$this->pass,$this->db);
            // mysqli_set_charset($this->conn,'utf8');
            $this->obj = json_decode(file_get_contents('php://input')); // get full
        }
        //ex cmd
        public function ex_cmd($query){
            try{
                return mysqli_query($this->conn,$query);
            }catch(Exception $ex){ return false; }
        }
        //ex json
        public function cover_json($query){
            $query = mysqli_query($this->conn,$query);
           
            while($row = mysqli_fetch_assoc($query)){
                $arr[] = $row;
           }
           echo ((!empty($arr))? json_encode($arr):0);
           
        
        }
        //ex array
        public function ex_arr($query)
        {
           $query = $this->ex_cmd($query);
           $arr = [];
          while($row = mysqli_fetch_array($query)){
             $arr[] = $row;
          }
          return $arr;
        }
         //ex with assoc
         public function ex_assoc_list($query)
         {
            $query = $this->ex_cmd($query);
           $arr = [];
          while($row = mysqli_fetch_assoc($query)){
             $arr[] = $row;
          }
          return $arr;
         }
        //ex with assoc
        public function ex_assoc($string,$query)
        {
           $query = $this->ex_cmd($query);
           try{
            return mysqli_fetch_assoc($query)[$string];
           }catch(Exception $ex){
               return false;
           }
        }
        //check query
        public function check_query($query){
            $query = mysqli_query($this->conn,$query);
            $count = 0;
            while($row = mysqli_fetch_array($query)){
                $count++;
                if($count > 0){
                    return true;
                }
            }
            return false;
        }
        // get Obj from React
        public function get_val_react($keywork)
        {
           if(isset($this->obj->data)){
                foreach ($this->obj->data as $key => $val) {
                    if($keywork == $key) {
                    return $val;
                    }
                }return 0;
           }return 0;
        }
    }
    
?>