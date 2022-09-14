<?php 
    class bill extends Controller{
        public $db;
        public $IDBILL;
        public $IDACCOUNT;
        public $CREATEDBILLDATE;
        public $STATUSBILL;
        public $SHOPPINGINFOID;
        public $TOTAL;
        public $id;
        public function __construct()
        {
           $this->db = $this->model("Database");
           $this->IDBILL= $this->db->get_val_react("IDBILL");
           $this->IDACCOUNT= $this->db->get_val_react("IDACCOUNT");  
           $this->CREATEDBILLDATE= $this->db->get_val_react("CREATEDBILLDATE");  
           $this->STATUSBILL= $this->db->get_val_react("STATUSBILL");
           $this->SHOPPINGINFOID = $this->db->get_val_react("SHOPPINGINFOID");
           $this->TOTAL = $this->db->get_val_react("TOTAL");
        }
        public function get(){
            $query = "select * FROM bill b , account a WHERE b.IDACCOUNT = a.IDACCOUNT";
            $this->db->cover_json($query);
        }
        public function post()
        {
            switch($this->db->obj->type){
                case "create":{
                    $query = "select * from shoppingcart s where s.IDACCOUNT = '{$this->IDACCOUNT}'";
                    // lấy hết id shoes 
                    $billinfo = $this->db->ex_assoc_list($query);
                    // echo "money: ".$total;
                    //
                    $datenow = date("Y-m-d");
                    $query = "select * FROM `bill` where bill.CREATEDBILLDATE = '{$datenow}' ORDER BY `bill`.`IDBILL` ASC";
                    // echo $query;
                    $query = $this->db->ex_cmd("select * FROM `bill` where bill.CREATEDBILLDATE = '{$datenow}' ORDER BY `bill`.`IDBILL` ASC");
                    // cục bộ arr 
                    $arr = array();
                    //string
                    while($row = mysqli_fetch_assoc($query)){
                        if(strtotime($row['CREATEDBILLDATE']) == strtotime($datenow)){
                        $arr[] = intval(substr($row['IDBILL'],-3));
                        }
                    }// brk
                // print_r($arr);
                $i = 1;
                    while(true){
                        if(!is_numeric(array_search($i,$arr))){
                           if($i <= 9){
                            $this->id = '00'.$i;
                            break;
                           }else if($i <= 99){
                            $this->id = '0'.$i;
                            break;
                           }else{
                            $this->id = $i;
                           break;
                           }
                        }else{
                            $i++;
                        }
                    }
                    $bill = str_replace('-','',$datenow.$this->id);
                    //truy vấn
                    $date  = date('Y-m-d');
                    $query = "insert into `bill`(`IDBILL`, `IDACCOUNT`, `CREATEDBILLDATE`, `STATUSBILL`, `SHOPPINGINFOID`,`TOTAL`) VALUES ('{$bill}','{$this->IDACCOUNT}','{$date}','Chờ duyệt','{$this->SHOPPINGINFOID}',{$this->TOTAL})";
                   if(!$this->db->ex_cmd($query)){
                       echo 0;
                   }
                    // qua ct billl
                    
                    foreach($billinfo as $val){
                        $query = "insert into `detailbill`(`SHOESID`, `IDBILL`, `QUANTITYINBILL`, `IDSIZE`) VALUES ('".$val['SHOESID']."','".$bill."',".$val['QUANTITY'].",".$val['IDSIZE'].")";
                        if (!$this->db->ex_cmd($query)) {
                       echo 0;
                    }
                    }
                    $query = "select * FROM `shoppingcart` WHERE IDACCOUNT = '{$this->IDACCOUNT}'";
                    $shoppingcard = $this->db->ex_assoc_list($query);                 
                    foreach($shoppingcard as $val){
                        $quantity = intval($val['QUANTITY']);
                        $shoes = $val['SHOESID'];
                        $idsize = $val['IDSIZE'];
                        $query = "update `stock` SET `QUANTITYINSTOCK` = QUANTITYINSTOCK - {$quantity} WHERE `SHOESID` = '{$shoes}' and IDSIZE = '{$idsize}'";
                        $this->db->ex_cmd($query);
                    }
                    $query = "delete from `shoppingcart` WHERE `IDACCOUNT` = '{$this->IDACCOUNT}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                  break;
                }
                // case "get":{
                //     $query = "select * FROM `detailbill` d , image i , shoes s WHERE IDBILL = '{$this->IDACCOUNT}' and d.SHOESID = s.SHOESID and i.IMAGEID = s.IMAGEID";
                //     $this->db->cover_json($query);
                //     break;
                // }
                case "update": {
                    $query = "update `bill` SET `STATUSBILL`='{$this->STATUSBILL}' WHERE `IDBILL`='{$this->IDBILL}' and `IDACCOUNT`='{$this->IDACCOUNT}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                case "updatebill":{
                    $query = "update bill set STATUSBILL = '{$this->STATUSBILL}' where IDBILL = '{$this->IDBILL}'";
                    $this->db->ex_cmd($query);
                    echo 1;
                    break;
                }
                
            }
        }
    }
?>