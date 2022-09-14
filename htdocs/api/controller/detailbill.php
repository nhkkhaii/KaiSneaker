<?php
class detailbill extends Controller
{
    public $db;
    public $SHOESID;
    public $IDBILL;
    public $QUANTITYINBILL;
    public $IDSIZE;
    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->SHOESID = $this->db->get_val_react("SHOESID");
        $this->IDBILL = $this->db->get_val_react("IDBILL");
        $this->QUANTITYINBILL = $this->db->get_val_react("QUANTITYINBILL");
        $this->IDSIZE = $this->db->get_val_react("IDSIZE");
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "create": {
                    $query = "insert into `detailbill`(`SHOESID`, `IDBILL`, `QUANTITYINBILL`, `IDSIZE`) VALUES ('{$this->SHOESID}','{$this->IDBILL}','{$this->QUANTITYINBILL}','{$this->IDSIZE}')";
                    if ($this->db->ex_cmd($query)) {
                        echo 1;
                    } else {
                        echo 0;
                    }
                    break;
                }
            case "get": {
                    $query = "select * FROM `detailbill` d, shoes s , image i WHERE s.SHOESID = d.SHOESID and i.IMAGEID = s.IMAGEID and d.IDBILL ='{$this->IDBILL}' ";
                    $this->db->cover_json($query);
                    break;
                }
        }
    }
}
