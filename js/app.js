const cart=[];

function myCart(){
    let lista = prompt("Inserisci cosa vuoi comprare");
 

    if (lista === null)  {
        alert ("Hai annullato la scelta");

    } if (lista === "") {
    alert ("Non hai inserito nessun prodotto");

    } else if (cart.includes(lista) == true) {
        alert("Prodotto già presente nel carrello")
    }

    else if (lista == true) {
        alert("Ottima scelta!");
        
        let scelte = lista.split(" ");
        cart.push(lista);
    }
   
console.log(lista);

return cart;
}