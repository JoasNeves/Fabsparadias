window.onload = function() {
    var shoppingList = JSON.parse(localStorage.getItem("listaDeProdutos"));
    for(var i = 0; i < shoppingList.length; i++){
        addToList(shoppingList[i])
    }
}

function addToList(item) {
    var list = document.getElementById("shopping-list")
    list.innerHTML += "<li> Você colocou um(a) " +  item.id + " na sua lista. R$: "+ item.preco + "</li>";
}

function umDia(){
    //Um dia eu melhoro isso, mas hoje eu n quero
    alert("atualize a pagina")
    localStorage.clear()
}