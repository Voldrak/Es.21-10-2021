const cart=[];

function myCart(){
    let lista = prompt("Inserisci cosa vuoi comprare");
 
    let scelte = lista.split(" ");

    if (lista === null)  {
        alert ("Hai annullato la scelta");

    } if (lista === "") {
    alert ("Non hai inserito nessun prodotto");

    } else if (cart.includes(lista) == true) {
        alert("Prodotto già presente nel carrello")
    }

    else  {
        alert("Ottima scelta!");
        
        
        cart.push(lista);
    }
   
console.log(lista);

return cart;
}