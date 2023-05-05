var email = document.getElementById("#name");
var senha = document.getElementById("#senha");



function verificaçao_usuario(){
    
if (email == "B508"){

    window.alert("Usuario encontrado")
}
else{
    window.alert("Erro... Usuario Não encontrado");
}
}











//ChtaGPT


function login() {
    // Define as credenciais válidas
    const validEmail = "brunosantiago2007@gmail.com";
    const validPassword = "B50850058805";
  
    // Obtém os valores dos campos de email e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Verifica se os valores correspondem às credenciais válidas
    
    switch(validEmail && validPassword){
        case validEmail=="brunosantiago2007@gmail.com" && validPassword == "B50850058805":
        window.location.href("../indes.html")
        break;
        
        case validEmail == "brunosantiago7002@gmai.com" && validPassword=="123456":
            window.location.href("../index.html")
            break;

        case validEmail == "Professor123@gmai.com" && validPassword=="Senai123":
            window.location.href("../index.html")
            break;
        



        
        


    }
  }