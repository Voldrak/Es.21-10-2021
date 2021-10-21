const cart = [];

function myCart(){
    let prom = prompt("inserisci cosa vuoi comprare");

    let scelta = prom.split(" ");

    cart.push(scelta);

    console.log(cart);

    return cart;
 }