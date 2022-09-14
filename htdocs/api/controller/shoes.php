<?php
class shoes extends Controller
{
    public $db;
    public $SHOESID;
    public $IDBRAND;
    public $IMAGEID;
    public $SHOESNAME;
    public $SHOESPRICE;
    public $SHOESDESCRIPTION;
    public $SHOESIMG;
    public $img1;
    public $img2;
    public $img3;
    public $img4;
    public $keysearch;
    public function __construct()
    {
        $this->db = $this->model("Database");
        $this->SHOESID = $this->db->get_val_react("SHOESID");
        $this->IDBRAND = $this->db->get_val_react("IDBRAND");
        if (is_object($this->IDBRAND)) {
            foreach ($this->IDBRAND as $key => $val) {
                if ("IDBRAND" == $key) {
                    $this->IDBRAND =  $val;
                }
            }
        }
        $this->IMAGEID = md5($this->SHOESID);
        $this->SHOESNAME = $this->db->get_val_react("SHOESNAME");
        $this->SHOESPRICE = $this->db->get_val_react("SHOESPRICE");
        $this->SHOESDESCRIPTION = $this->db->get_val_react("SHOESDESCRIPTION");
        $this->SHOESIMG = $this->db->get_val_react("SHOESIMG");
        $this->keysearch = $this->db->get_val_react("keysearch");
        $this->img1 = (!empty($this->SHOESIMG[0]))?$this->SHOESIMG[0]:"";
        $this->img2 = (!empty($this->SHOESIMG[1]))?$this->SHOESIMG[1]:"";
        $this->img3 = (!empty($this->SHOESIMG[2]))?$this->SHOESIMG[2]:"";
        $this->img4 = (!empty($this->SHOESIMG[3]))?$this->SHOESIMG[3]:"";
    }
    public function get()
    {
        $query = "select * from shoes s , brand r , image i where i.IMAGEID = s.IMAGEID and r.IDBRAND = s.IDBRAND";
        $this->db->cover_json($query);
    }
    public function post()
    {
        switch ($this->db->obj->type) {
            case "update": {
                
                    // echo $this->IDBRAND;
                
                    $query = "update image set IMAGESHOES1 = '{$this->img1}',IMAGESHOES2 = '{$this->img2}'
                ,IMAGESHOES3 = '{$this->img3}' ,IMAGESHOES4 ='{$this->img4}' where IMAGEID = '{$this->IMAGEID}'";
                    $this->db->ex_cmd($query);
                    //
                    $query = "update `shoes` SET `IDBRAND`='{$this->IDBRAND}',
                `IMAGEID`='{$this->IMAGEID}',`SHOESNAME`='{$this->SHOESNAME}',`SHOESPRICE`='{$this->SHOESPRICE}',
                `SHOESDESCRIPTION`='{$this->SHOESDESCRIPTION}' WHERE SHOESID = '{$this->SHOESID}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
            case "create": {
                    //check id
                    $query = "select * from shoes where SHOESID = '{$this->SHOESID}'";
                    if ($this->db->check_query($query)) {
                        //có
                        echo '-1';
                    } else {
                        //k có
                        //add img
                        $query = "INSERT INTO `image`(`IMAGEID`, `IMAGESHOES1`, `IMAGESHOES2`, `IMAGESHOES3`, `IMAGESHOES4`) 
                VALUES ('{$this->IMAGEID}','{$this->img1}','{$this->img2}','{$this->img3}','{$this->img4}')";
                        try {
                            $this->db->ex_cmd($query);
                            //add shoes
                            $query = "INSERT INTO `shoes`(`SHOESID`, `IDBRAND`, `IMAGEID`, `SHOESNAME`, `SHOESPRICE`, `SHOESDESCRIPTION`) 
                    VALUES ('{$this->SHOESID}','{$this->IDBRAND}','{$this->IMAGEID}','{$this->SHOESNAME}'
                    ,'{$this->SHOESPRICE}','{$this->SHOESDESCRIPTION}')";
                            $this->db->ex_cmd($query);
                            echo 1;
                        } catch (Exception $ex) {
                            echo 0;
                        }
                    }
                    break;
                }
            case "delete": {
                    $query = "delete from image where IMAGEID = '{$this->IMAGEID}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                case "get":{
                    $query = "select * from shoes s , brand r , image i where i.IMAGEID = s.IMAGEID and r.IDBRAND = s.IDBRAND and s.SHOESID = '{$this->SHOESID}'";
                    $this->db->cover_json($query);
                }  
        }
        
    }
    public function hotproduct()
        {
            $query = "SELECT count(d.QUANTITYINBILL) as 'TOTAL',s.SHOESID , s.SHOESNAME,s.SHOESPRICE, image.IMAGEID, s.SHOESDESCRIPTION,brand.BRANDNAME  FROM detailbill d, shoes s,brand ,image where s.SHOESID = d.SHOESID and brand.IDBRAND = s.IDBRAND and image.IMAGEID = s.IMAGEID GROUP BY d.SHOESID";
            $this->db->cover_json($query);
        }
    public function search()
    {
        $query = "select * from shoes s , brand r , image i where r.IDBRAND = s.IDBRAND and i.IMAGEID = s.IMAGEID and s.SHOESNAME like'%{$this->keysearch}%'";
        $this->db->cover_json($query);
    }

}
