function validarCampos() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(email == "alexandre.pucpr@gmail.com" && senha == "123456") {

        window.location.href = "paginas/paginas.html"

    }
    else {
        alert("Usuario ou senha incorreta!")
    }

}