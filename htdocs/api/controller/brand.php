<?php 
    class brand extends Controller{
        public $db;
        public $IDBRAND;
        public $BRANDNAME;
        public $DESCRIPTIONBRAND;
        public $IMAGEBRAND;
        public function __construct()
        {
            $this->db = $this->model("Database");
            $this->IDBRAND =  $this->db->get_val_react("IDBRAND");
            $this->BRANDNAME = $this->db->get_val_react("BRANDNAME");
            $this->IMAGEBRAND = $this->db->get_val_react("IMAGEBRAND");
            $this->DESCRIPTIONBRAND = $this->db->get_val_react("DESCRIPTIONBRAND");
        }
        public function get()
        {
            $query = "select * from brand";
            $this->db->cover_json($query);
        }
        public function post()
        {
            switch($this->db->obj->type){
                case "update":{
                    $query = "update brand set BRANDNAME = '{$this->BRANDNAME}',
                    DESCRIPTIONBRAND = '{$this->DESCRIPTIONBRAND}',
                    IMAGEBRAND = '{$this->IMAGEBRAND}'
                     where IDBRAND	 = '{$this->IDBRAND}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                case "create":{
                    if(!empty($this->BRANDNAME)){
                        $query = "insert into  brand(BRANDNAME,DESCRIPTIONBRAND,IMAGEBRAND) 
                        values('{$this->BRANDNAME}','{$this->DESCRIPTIONBRAND}','{$this->IMAGEBRAND}')";
                        $this->db->ex_cmd($query);
                        echo 1;
                    }
                    break;
                }
                case "delete":{
                    $query = "delete from brand where IDBRAND = '{$this->IDBRAND}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                case "get":{
                    $query = "select * from brand where IDBRAND='{$this->IDBRAND}'";
                    $this->db->cover_json($query);
                    break;
                }
            }
        }
    }
?>