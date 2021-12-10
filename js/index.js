/* <aside class="product">
    <div class="image">
        <img src="assets/shoes/sleakmir/thumbnail.jpg" alt="sleakmir shoes by jim hortons">
    </div>
    <header class="name">
        <h2>sleakmir</h2>
    </header>
    <p class="price">$123.45</p>
</aside> */

(function(){
    //data dance
    let store;
    // Create a cart in localStorage if one does not exist 
    if(!localStorage.getItem('cart')){
        const temp = JSON.stringify([])
        localStorage.setItem('cart', temp)
    }    

    updateCartCount()

    fetch('./data/shoes.json')
    .then(res=> res.json())
    .then(data=>{
        store = [...data]
        localStorage.setItem('store', JSON.stringify(store))
        const productElements = renderProducts(data)
        const products = addProductActions(productElements)
        const main = document.createElement('main')
        products.forEach(product =>{
            // layout thrashing
            // document.body.append(product)
            main.append(product)
        })
        document.querySelector('.page-header').after(main)

        // Code for array of functions (key feature of functional programming)
        // const products = compose(renderProducts(data), addProductEvents(),)
    })
    .catch(error=>console.log(error))

    function updateCartCount(){
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        document.querySelector('#cartCount').textContent = cartItems.length;
    }

    function renderProducts(products) {
        const elements =  products.map((product)=>{
            const {id,price,thumbnail,name,short} = product
            const template = `
            <aside class="product" data-key=${id}>
                <div class="image">
                    <img src="assets/shoes/${name.toLowerCase()}/${thumbnail}" alt="${name} shoes by jim hortons">
                </div>
                <header class="name">
                    <h2>${name}</h2>
                </header>
                <p class="price">$${price/100}</p>
            </aside>
            `
            return document.createRange().createContextualFragment(template).children[0]
        })
        return elements
    }

    // click event handler for a product 
    function onRequestForInfo(e){
        // store contains the product data
        // array.find()
        const key = Number(e.currentTarget.dataset.key);
        const selected = store.find(product=> product.id === key)
        localStorage.setItem('product', JSON.stringify(selected))
        window.location.assign('product.html')
    }
    window.addEventListener('beforeunload',(e)=> e.preventDefault())
 
    function addProductActions(products){
        const elements = products.map(product =>{
            product.addEventListener('click', onRequestForInfo)
            return product
        })
        return elements
    }
}
)()