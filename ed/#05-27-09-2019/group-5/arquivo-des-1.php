<?php

$args = array(
	"Log" => "Inválido",
	"Porta" => "0",
	"Diretório" => '""'
);

foreach($argv as $key => $arg){

	if($arg == "-l"){
		$args["Log"] = "Válido";
	}
	if($arg == "-p"){
		if(is_numeric($argv[$key+1])){
			$args["Porta"] = $argv[$key+1];
		}
	}
	if($arg == "-d"){
		if(isset($argv[$key+1])){
			$args['Diretório'] = $argv[$key+1];
		}
	}

}

echo "\n";
foreach($args as $chave => $valor){
	echo $chave . ": " . $valor . "\n";
}
echo "\n";
