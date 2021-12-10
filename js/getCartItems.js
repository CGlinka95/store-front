function getCartItems (cartItems=[]){
        // unique products
        const ids = cartItems.map(item=>item.id)
        //     new Set() convert the set to an array
        const keys = [...new Set(ids)]
        // array/obj items by id + sum quantity
        // reducer
        const checkoutItems = keys.reduce((checkout, key)=>{
            const items = cartItems.filter(product=>product.id === key)
            // This is the quantity total in the items array
            let sum=0;
            items.forEach(item=>{
                sum += item.quantity
            })
            checkout.push({id:key, quantity:sum})
            return checkout
        },[])
        
        return checkoutItems
}
export {getCartItems}
