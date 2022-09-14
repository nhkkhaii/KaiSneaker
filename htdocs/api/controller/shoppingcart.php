<?php
class shoppingcart extends Controller
{
    public $db;
    public $IDACCOUNT;
    public $SHOESID;
    public $IDSIZE;
    public $QUANTITY;
    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->IDACCOUNT = $this->db->get_val_react("IDACCOUNT");
        $this->SHOESID = $this->db->get_val_react("SHOESID");
        $this->IDSIZE = $this->db->get_val_react("IDSIZE");
        $this->QUANTITY = $this->db->get_val_react("QUANTITY");
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "update": {
                    $query = "update `shoppingcart` SET `QUANTITY`='{$this->QUANTITY}' WHERE SHOESID = '{$this->SHOESID}' and IDACCOUNT='{$this->IDACCOUNT}' and IDSIZE = '{$this->IDSIZE}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "create": {
                    try {
                        //

                        $query = "insert into `shoppingcart`(`IDACCOUNT`, `SHOESID`, `IDSIZE`, `QUANTITY`) VALUES ('{$this->IDACCOUNT}','{$this->SHOESID}','{$this->IDSIZE}','{$this->QUANTITY}')";
                        if ($this->db->ex_cmd($query)) {
                            echo 1;
                        } else {
                            echo -1;
                        }

                        //


                    } catch (Exception $ex) {
                        echo 0;
                    }
                    break;
                }
            case "delete": {
                    $query = "delete from shoppingcart where SHOESID = '{$this->SHOESID}' and IDACCOUNT='{$this->IDACCOUNT}' and IDSIZE = '{$this->IDSIZE}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "get": {
                    $query = "select * from shoppingcart s , shoes sh , brand b, image i, size si, stock st where s.SHOESID = sh.SHOESID and sh.IDBRAND = b.IDBRAND and i.IMAGEID = sh.IMAGEID and si.IDSIZE = s.IDSIZE and st.SHOESID = sh.SHOESID and s.IDACCOUNT = '{$this->IDACCOUNT}'";
                    $this->db->cover_json($query);
                    break;
                }
        }
    }
}
