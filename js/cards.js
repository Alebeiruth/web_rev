var filmes = [
    {
        titulo: "Avatar",
        genero: "Ficção",
        ano: 2008
    },
    {
        titulo: "Harry Potter",
        genero: "Aventura",
        ano: 2001

    },
    {
        titulo: "Percy Jackson",
        genero: "Ação",
        ano: 2013

    }
];

for(var i = 0; i < filmes.length; i++){

    var conteudo = "";

    conteudo += '<div class="card">';
    conteudo += '<div class="titulo">' + filmes[i].titulo + '</div>';
    conteudo += '<div class="genero">' + filmes[i].genero + '</div>';
    conteudo += '<div class="ano">' + filmes[i].ano + '</div>';
    conteudo += '</div>';

    document.getElementById("janelasCards").innerHTML += conteudo; //fica no lugar do antigo div com as categorias do cartão 


}