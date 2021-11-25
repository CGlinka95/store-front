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
    fetch('./data/shoes.json')
    .then(res=> res.json())
    .then(data=>{
        store = [...data]
        const productElements = renderProducts(data)
        const products = addProductActions(productElements)
        const main = document.createElement('main')
        products.forEach(product =>{
            // layout thrashing
            // document.body.append(product)
            main.append(product)
        })

        document.querySelector('.page-header').appendChild(main)

        // Code for array of functions (key feature of functional programming)
        // const products = compose(renderProducts(data), addProductEvents(),)
    })
    .catch(error=>console.log(error))

    function renderProducts(products) {
        const elements =  products.map((product)=>{
            const {id,price,thumbnail,name} = {...product}
            const template = `
            <aside class="product" data-key=${id}>
                <div class="image">
                    <img src="assets/shoes/${name.toLowerCase()}/${thumbnail}" alt="${name} shoes by jim hortons">
                </div>
                <header class="name">
                    <h2>${name}</h2>
                </header>
                <p class="price">$${price}</p>
            </aside>
            `
            return document.createRange().createContextualFragment(template).children[0]
        })

        return elements
    }
    // click event handler for a product 
    function onRequestForInfo(e){
        console.log(e.currentTarget.dataset.key)
    }
 
    function addProductActions(products){
        const elements = products.map(product =>{
            product.addEventListener('click', onRequestForInfo)
            return product
        })

        return elements
    }
}
)()