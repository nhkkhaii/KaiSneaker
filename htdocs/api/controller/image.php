<?php 
class image extends Controller{
    public $db;
    public function __construct()
    {
        $this->db = $this->model("Database");
    }
    public function get()
    {
        $query = "select * from image where IMAGEID = '1' ";
        $this->db->cover_json($query);
    }
    public function post()
    {
        switch($this->db->obj->type){
            case "update":{
                $IMAGESHOES1 = $this->db->get_val_react("IMAGESHOES1");
                $IMAGESHOES2 = $this->db->get_val_react("IMAGESHOES2");
                $IMAGESHOES3 = $this->db->get_val_react("IMAGESHOES3");
                $IMAGESHOES4 = $this->db->get_val_react("IMAGESHOES4");
                $query = "update image set IMAGESHOES1 = '{$IMAGESHOES1}',IMAGESHOES2 = '{$IMAGESHOES2}'
                ,IMAGESHOES3 = '{$IMAGESHOES3}' ,IMAGESHOES4 ='{$IMAGESHOES4}' where IMAGEID = '1'";
                $this->db->ex_cmd($query);
                echo 1;
                break;
            }
            case "create":{
                $IMAGESHOES1 = $this->db->get_val_react("IMAGESHOES1");
                $IMAGESHOES2 = $this->db->get_val_react("IMAGESHOES2");
                $IMAGESHOES3 = $this->db->get_val_react("IMAGESHOES3");
                $IMAGESHOES4 = $this->db->get_val_react("IMAGESHOES4");
                $query = "insert into  image(IMAGESHOES1,IMAGESHOES2,IMAGESHOES3,IMAGESHOES4) values('{$IMAGESHOES1}',
                '{$IMAGESHOES2}','{$IMAGESHOES3}','{$IMAGESHOES4}'";
                $this->db->ex_cmd($query);
                echo 1;
                break;
            }
            case "get":{
                $query = "select * from image where IMAGEID='{$this->db->get_val_react('IMAGEID')}'";
                $this->db->cover_json($query);
                break;
            }
        }

    }
}
?>