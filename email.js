
async function coletaEmail(evento){

    const text = document.querySelector("[data-texto]").value;
    const email = document.querySelector("[data-email]").value;    

    await mandaEmail(text,email) 

}

function mandaEmail(text,email){
    console.log(text, email)
    


    document.querySelector("[data-texto]").value = "";
    document.querySelector("[data-email]").value = "";

    
}

const botaoEnviar = document.querySelector("[data-botao]");

botaoEnviar.addEventListener("click", evento => coletaEmail(evento));
