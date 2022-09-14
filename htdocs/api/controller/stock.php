<?php

use function PHPSTORM_META\type;

class stock extends Controller{
    public $db;
    public $SHOESID;
    public $IDSIZE;
    public $QUANTITYINSTOCK;
    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->SHOESID = $this->db->get_val_react("SHOESID");
        $this->IDSIZE = $this->db->get_val_react("IDSIZE");
        $this->QUANTITYINSTOCK = $this->db->get_val_react("QUANTITYINSTOCK");
        // print_r($this->db->obj->data);
    }
    public function get()
    {
        $query = "select * from stock st , shoes sh, image i, size si WHERE st.SHOESID = sh.SHOESID and sh.IMAGEID = i.IMAGEID and si.IDSIZE = st.IDSIZE";
        $this->db->cover_json($query);
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "update": {
                    $query = "update `stock` SET `IDSIZE`='{$this->IDSIZE}',`QUANTITYINSTOCK`='{$this->QUANTITYINSTOCK}' WHERE `SHOESID`='{$this->SHOESID}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "create": {
                    try {
                        $query = "insert into `stock`(`SHOESID`, `IDSIZE`, `QUANTITYINSTOCK`) VALUES ('{$this->SHOESID}','{$this->IDSIZE}',{$this->QUANTITYINSTOCK})";
                        $this->db->ex_cmd($query);
                        echo $query;
                    } catch (Exception $ex) {
                        echo 0;
                    }
                    break;
                }
            case "delete": {
                    $query = "delete from `stock` WHERE `SHOESID` = '{$this->SHOESID}' and  IDSIZE= '{$this->IDSIZE}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                case "get": {
                    $query = "select * from stock s , size si where s.IDSIZE = si.IDSIZE and s.SHOESID = '{$this->SHOESID}' and  s.IDSIZE = '{$this->IDSIZE}'";
                    $this->db->cover_json($query);
                    // echo $query;
                    break;
                }
                case "getsize": {
                    $query = "select * from stock s , size si where s.SHOESID = '{$this->SHOESID}' and s.IDSIZE = si.IDSIZE";
                    $this->db->cover_json($query);
                    break;
                }

        }
    }
}