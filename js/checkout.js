// ES Module Client/Server
// Commonjs Modules /node Serverjs
//Writing in the module scope 

import {dataFetcher} from "./dataFetcher.js";
import {getCartItems} from "./getCartItems.js";
import {renderCheckout} from "./renderCheckout.js";
async function checkout(){
    const cartItems = await dataFetcher('data/cart.json')
    const checkoutItems = getCartItems(cartItems);
    document.querySelector('main').innerHTML = renderCheckout(checkoutItems)
}

checkout()