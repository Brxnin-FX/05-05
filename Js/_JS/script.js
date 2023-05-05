var nome


if (nome == null){
    nome = "desconhecido"
}

function perguntar_nome(){

    nome = window.prompt("Qual seu nome?");
    window.alert(`prazer em conheçelo ${nome}`)
}

function escrever_nome(){
    window.document("<h1>Olá Mundo</h1>")
}