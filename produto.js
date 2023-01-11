var button1 = document.getElementById("comprarpao");
button1.addEventListener("click", adicionarItem);
var button2 = document.getElementById("comprarcuuk");
button2.addEventListener("click", adicionarItem);
var button3 = document.getElementById("comprartorta");
button3.addEventListener("click", adicionarItem);
var button4 = document.getElementById("comprarbiscoito");
button4.addEventListener("click", adicionarItem);
var button5 = document.getElementById("comprarcoixinha");
button5.addEventListener("click", adicionarItem);
var button6 = document.getElementById("comprarmiku");
button6.addEventListener("click", adicionarItem);
var button7 = document.getElementById("cao1");
button7.addEventListener("click", adicionarItem);
var button8 = document.getElementById("mikuAlbum");
button8.addEventListener("click", adicionarItem);
var button9 = document.getElementById("cao2");
button9.addEventListener("click", adicionarItem);


const nomesProdutos = {
    "comprarpao": "Pão Francês",
    "comprarcuuk": "Cuca",
    "comprartorta": "Torta de Maçã",
    "comprarbiscoito": "Biscoito de huuum",
    "comprarcoixinha": "Coxinha",
    "comprarmiku": "Boneco de Miku",
    "cao1" : "Romeu",
    "mikuAlbum" : "Album da Hatsune Miku",
    "cao2" : "talvez um remedio"
  }
  
  const precoProdutos = {
    comprarpao: 5.99,
    comprarcuuk: 2.50,
    comprartorta: 8.99,
    comprarbiscoito: 4.50,
    comprarcoixinha: 3.99,
    comprarmiku: 6.99,
    cao1: 19.36,
    mikuAlbum: 9.99,
    cao2: 90.10
  };

var listaDeProdutos = [];

function adicionarItem(event){
    var id = event.target.previous
    var id = event.target.id;
    var nomeProduto = nomesProdutos[id];
    var listaDeProdutos = JSON.parse(localStorage.getItem("listaDeProdutos")) || [];

    var preco = precoProdutos[id];

    listaDeProdutos.push({id: nomeProduto, preco: preco});
    localStorage.setItem("listaDeProdutos", JSON.stringify(listaDeProdutos));
    addlist();

}


function addlist(){
    var shoppingList = JSON.parse(localStorage.getItem("listaDeProdutos"));
    for(var i = 0; i < shoppingList.length; i++){
        addToList(shoppingList[i])
    }
}

async function addToList(item) {
    var list = document.getElementById("shopping-list")
    console.log("voce comprou : " + item)

}



