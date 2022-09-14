<?php
class size extends Controller
{
    public $db;
    public $IDSIZE;
    public $SIZEEUR;
    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->IDSIZE = $this->db->get_val_react("IDSIZE");
        $this->SIZEEUR = $this->db->get_val_react("SIZEEUR");
    }
    public function get()
    {
        $query = "select * from size";
        $this->db->cover_json($query);
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "update": {
                    $query = "update `size` SET `SIZEEUR`='{$this->SIZEEUR}' WHERE `IDSIZE`='{$this->IDSIZE}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "create": {
                    try {
                        $query = "insert into `size`(`SIZEEUR`) VALUES ('{$this->SIZEEUR}')";
                        $this->db->ex_cmd($query);
                        echo 1;
                    } catch (Exception $ex) {
                        echo 0;
                    }
                    break;
                }
            case "delete": {
                    $query = "delete from size where IDSIZE = '{$this->IDSIZE}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                // case "get": {
                //         $query = "select * from size where IDSIZE = '{$this->IDSIZE}'";
                //         $this->db->ex_cmd($query);

                //         echo 1;
                //         break;
                //     }
        }
    }
}
