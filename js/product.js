(function(){
    const product = JSON.parse(localStorage.getItem('product'))
    const markup = configUI(product)
    document.querySelector('main').innerHTML = markup
    // Building the UI and adding the data

    function configUI(product){
        const {name, price, long} = {...product}
        const template = `
            <section>
                <header>
                    <h2>${name}</h2>
                    <p>${price}</p>
                </header>
                <ul>
                    <li><img src="assets/shoes/avory/1.jpg" alt=""></li>
                    <li><img src="assets/shoes/avory/2.jpg" alt=""></li>
                    <li><img src="assets/shoes/avory/3.jpg" alt=""></li>
                    <li><img src="assets/shoes/avory/4.jpg" alt=""></li>
                </ul>
                <p>${long}</p>
                <p>sizes</p>
                <ul>
                    <li><button>add to cart</button></li>
                    <li><button>checkout</button></li>
                </ul>
                <ul>
                    <li>rating</li>
                    <li>view</li>
                    <li>reviews</li>
                </ul>
            </section>
        `
    }
}
)()