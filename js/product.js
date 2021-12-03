// Template
{/* <main> 
      <section class="product">
          <ul class="product-shots">
            <li><img src="assets/shoes/sleakmir/1.jpg" alt=""></li>
            <li> <img src="assets/shoes/sneakmir/2.jpg" alt=""></li>
            <li><img src="assets/shoes/sneakmir/3.jpg" alt=""></li>
            <li><img src="assets/shoes/sneakmir/4.jpg" alt=""></li>
          </ul>

          <div class="product-details">
            <header>
              <h2 class="name">Product Name</h2>
              <p class="price">$125.38</p>
            </header>
  
            <ul class="sizes">
              <li class="size">9</li>
              <li class="size">9.5</li>
              <li class="size">10</li>
            </ul>

            <ul class="quantity">
              <li>quantity</li>
            </ul>
  
            <ul class="controls">
              <li><button class="add-to-cart">add to cart</button></li>
              <li><button class="checkout">checkout</button></li>
            </ul>
  
            <div class="product-description">
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, quae. Ut assumenda eaque voluptatibus culpa ab ipsam adipisci quos quaerat soluta esse delectus eos voluptate distinctio, accusantium quod voluptates provident?</p>
            </div>
            
            <footer>
              <ul class="meta-data">
                <li class="rating">rating<span>1</span></li>
                <li class="views">view<span>1</span></li>
                <li class="reviews">reviews<span>1</span></li>
              </ul>
            </footer>
          </div>
      </section> 
     </main> */}

(function(){
    
    const cartItems = getCartItems();

    function getCartItems(){
      let cart;
      if(localStorage.getItem('cartItems') === null){
        const temp = JSON.stringify([{id:1}, {id:2}, {id:3}])
        cart = localStorage.setItem('cartItems', temp)
      }else{
        cart = localStorage.getItem('cartItems')
      }
      return cart
    }

    const product = JSON.parse(localStorage.getItem('product'))
    const productItem = productDisplay(product, sizesFormatter)

    addListeners();

    document.querySelector('main').append(productItem)

    function productDisplay(product, formatter){
        const {name, price, long, sizes, short, id, productShots, meta} = product
        const {reviews, rating, views} = meta
        const template = `
                <section class="product">
                    <ul class="product-shots">
                        <li><img src="assets/shoes/${name.toLowerCase()}/${productShots[0]}" alt="${name}"></li>
                        <li><img src="assets/shoes/${name.toLowerCase()}/${productShots[1]}" alt="${name}"></li>
                        <li><img src="assets/shoes/${name.toLowerCase()}/${productShots[2]}" alt="${name}"></li>
                        <li><img src="assets/shoes/${name.toLowerCase()}/${productShots[3]}" alt="${name}"></li>
                    </ul>
        
                    <div class="product-details">
                        <div>
                            <header>
                                <h2 class="name">${name}</h2>
                                <p class="price">$${price/1000}</p>
                            </header>

                            ${formatter(sizes)}
            
                            <ul class="quantity">
                                <li>quantity</li>
                            </ul>
                
                            <ul class="controls">
                                <li><button data-key=${id} class="add-to-cart">add to cart</button></li>
                                <li><button data-key=${id} class="checkout">checkout</button></li>
                            </ul>
                        </div> 
                        <div>
                            <div class="product-description">
                                <h3>Description</h3>
                                <p>${long}</p>
                            </div>
                        
                            <footer>
                                <ul class="meta-data">
                                    <li class="rating">rating<span>${rating}</span></li>
                                    <li class="views">view<span>${views}</span></li>
                                    <li class="reviews">reviews<span>${reviews}</span></li>
                                </ul>
                            </footer>
                        </div>    
                    </div>
                </section> 
        `
        return document.createRange().createContextualFragment(template).children[0]
    }

    function addListeners(){
      productItem.querySelector('.add-to-cart').addEventListener('click', onAddToCart)
      productItem.querySelector('.checkout').addEventListener('click', onCheckout)
    }

    function removeListeners(){
      productItem.querySelector('.add-to-cart').removeEventListener('click', onAddToCart)
      productItem.querySelector('.checkout').removeEventListener('click', onCheckout)
    }

    function onAddToCart(e) {
      const cartCount = document.querySelector('#cartCount')
      const key = Number(e.currentTarget.dataset.key)
      const store = JSON.parse(localStorage.getItem('store'))
      const addItem = store.find(product=> product.id === key)
      const {id} = addItem
      const cartObject = {
        id
      }

      const itemsInCart = JSON.parse(cartItems)
      cartCount.textContent = itemsInCart.length
    }

    function onCheckout(e) {
      removeListeners()
      window.location.assign('checkout.html')
    }

    function sizesFormatter (sizes){
      let markup = `<ul class="sizes">`
      sizes.forEach(size=>{
        markup += `<li class="size">${size}</li>`
      })
      markup += `</ul>`
      return markup
    }
}
)()