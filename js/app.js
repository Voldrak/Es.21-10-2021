const cart=[];

function myCart()
{
    let lista = prompt("Inserisci i prodotti che vuoi comprare uno per volta");


    if (lista === null || lista == "")  {
        alert ("Hai annullato la scelta");


    } else if (cart.includes(lista)) {
    alert ("Prodotto già esistente nel carrello");

    
    }

    else  {
        cart.push(lista);
        alert("Ottima scelta!");
    }
   
console.log(cart);
}