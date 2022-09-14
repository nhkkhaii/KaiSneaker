<?php
class shippinginfo extends Controller
{
    public $db;
    public $SHOPPINGINFOID;
    public $IDACCOUNT;
    public $SHOPPINGINFONAME;
    public $ADDRESS;
    public $SHOPPINGINFOPHONE;

    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->SHOPPINGINFOID = $this->db->get_val_react("SHOPPINGINFOID");
        $this->IDACCOUNT = $this->db->get_val_react("IDACCOUNT");
        $this->SHOPPINGINFONAME = $this->db->get_val_react("SHOPPINGINFONAME");
        $this->ADDRESS = $this->db->get_val_react("ADDRESS");
        $this->SHOPPINGINFOPHONE = $this->db->get_val_react("SHOPPINGINFOPHONE");
    }
    public function get()
    {
        $query = "select * FROM `shippinginfo`";
        $this->db->cover_json($query);
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "get": {
                    $query = "select * FROM `shippinginfo` WHERE `IDACCOUNT` = '{$this->IDACCOUNT}'";
                    $this->db->cover_json($query);
                    break;
                }
            case "create": {
                    $query = "insert into `shippinginfo`( `IDACCOUNT`, `SHOPPINGINFONAME`, `ADDRESS`, `SHOPPINGINFOPHONE`) VALUES 
                ('{$this->IDACCOUNT}','{$this->SHOPPINGINFONAME}','{$this->ADDRESS}','{$this->SHOPPINGINFOPHONE}')";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "delete": {
                    $query = "delete from `shippinginfo` WHERE `IDACCOUNT`  = '{$this->IDACCOUNT}' and SHOPPINGINFOID = '{$this->SHOPPINGINFOID}' ";
                    $this->db->cover_json($query);
                    echo 1;
                    break;
                }
            case "update": {
                    $query = "update from `shippinginfo` SET `SHOPPINGINFONAME` = '{$this->SHOPPINGINFONAME},`ADDRESS` = '{$this->ADDRESS}',`SHOPPINGINFOPHONE` = '{$this->SHOPPINGINFOPHONE}' WHERE `IDACCOUNT`  = '{$this->IDACCOUNT}' and SHOPPINGINFOID = '{$this->SHOPPINGINFOID}' ";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
        }
    }
}
