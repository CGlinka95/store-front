function renderCheckout(checkoutItems){
    let ul = `<ul>`
    checkoutItems.forEach(item=>{
        const template = `<li>${item.id} ${item.quantity}</li>`
        ul += template
    })
    ul += "</ul>"
    console.log(ul)
    return ul
}

export {renderCheckout}