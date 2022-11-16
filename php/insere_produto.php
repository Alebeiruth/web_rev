<?php

$nome = $_POST["nome"]; 
$descricao = $_POST["descricao"]; 
$preco = $_POST["preco"];

include "conexao.php";

mysqli_query($con, "INSERT INTO banco_produtos(nome, descricao, preco) VALUES ('$nome', '$descricao', $preco)");


?>

