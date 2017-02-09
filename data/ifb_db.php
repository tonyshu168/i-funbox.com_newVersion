<?php
header("content-type:appliction/json;charset=utf-8");
require dirname(__FILE__)."/ifbweb_dbConf.php";       //引入配置文件

@$read_save = $_REQUEST['mark'];                      //传入一个标记，根据mark值进行读写

$sql = "SELECT counter FROM praisecounter";

$db = new db($phpConf);

$counter = null;

$return = null;

if(empty($read_save)){ $return = $db -> getResult($sql); echo json_encode($return);}
else{ $counter = $db -> getResult($sql) + 1; $update = "UPDATE praisecounter set counter=$counter"; $db -> savePraises($update);}

class db{
	public $conn = null;

	public function __construct($config){            //构造方法的实例化
		$this -> conn = mysqli_connect($config['host'], $config['userName'], $config['password'], $config['database'], $config['port'])
			or die(mysqli_error());
		mysqli_query($this -> conn, "SET NAMES ".$config['charset']) or die(mysql_error());
	}

	//根据sql语句，获取查询结果
	public function getResult($sql){
		$result = mysqli_query($this -> conn,$sql) or die(mysql_error());
		$output = [];
		while($row = mysqli_fetch_assoc($result)){
			$output[] = $row;
		}

		return $output[0]['counter'];
	}

	//根据sql语句，存储数据
	public function savePraises($sql){
		$select = "SELECT counter from praisecounter";
		$data = [
			"counter" => 0,
			"result" => "Update Succ!!!"
		];

		$result = mysqli_query($this -> conn, $sql) or die(mysql_error());

		if($result){ $data['counter'] = self::getResult($select); echo json_encode($data);}
		else{ echo "Update Err!!!".$sql;}
	}
}