let x = 0;
function msg() {
    x+=1;
    alert("Você clicou no botão! " + x + " Clicaram Vezes no botão.");
}

document.querySelector('.mim').onclick = msg;

