
function gravar() {

    var form = document.getElementById("formCadastro");
    var dados = new FormData(form);

    fetch("php/insere_produto.php", {
        method: "POST",
        body: dados
    });
}

function mostrar(){
    window.location.href = "html/listar.html";
}