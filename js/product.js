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
    const product = JSON.parse(localStorage.getItem('product'))
    const item = productDisplay(product)

    document.querySelector('main').append(item)

    function productDisplay(product){
        const {name, price, long, sizes, short, productShots, meta} = product
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
                        </div> 
                        <div>
                            <div class="product-description">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, quae. Ut assumenda eaque voluptatibus culpa ab ipsam adipisci quos quaerat soluta esse delectus eos voluptate distinctio, accusantium quod voluptates provident?</p>
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
        console.log(template)
        return document.createRange().createContextualFragment(template).children[0]
    }
}
)()