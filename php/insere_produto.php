<?php

$nome = $_POST["nome"]; 
$descricao = $_POST["descricao"]; 
$preco = $_POST["preco"];

include "conexao.php";

mysqli_query($con, "INSERT INTO banco_produtos(nome, descricao, preco) VALUES ('$nome', '$descricao', $preco)");


?>

// PARA INTERAGIR COM BD > $resultado = mysqli_query($con, "<query>");
// PARA INSERIR no BD >  mysqli_query($con, "INSERT INTO usuario(cpf, nome) VALUES ('99999', 'Alan Brado')");
// PARA SELECIONAR no BD > mysli_query($con, "SELECT * FROM usuario");
/* PARA OBTER RESULTADOS DE UMA QUERY
$registro = mysqli_fetch_assoc($resultado);
$cont = 0;
while($registro = mysqli_fetch_assoc($resultado)) {
  $dados[$cont]["coluna"] = $registro["coluna"];
  $cont++;
*/
// PARA FECHAR CONEXÃO > mysqli_close($conexao);
// PARA RETORNA MSG PARA JS > $objetoJSON = json_encode($dados);
// echo $objetoJSON;
