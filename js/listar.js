
fetch("../php/listar.php", {
    method: "GET"
}).then( async function (resposta) {

    var dados = await resposta.json();

    listarProdutos(dados);

});

function listarProdutos(){
    for(var i = 0; i < dados.length; i++)
    {
        document.getElementById("produtos").innerHTML += dados[i].nome + "<br>";
    }
} 