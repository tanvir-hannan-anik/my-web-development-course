function addCart(cart,wishlist){
    
    let newCart = [];
    let addWishlist = [...cart,...wishlist]
    const updatedCart= [...new Set(addWishlist)]
    
    return updatedCart;
}

const cart = ["Laptop", "Mouse", "Keyboard","tab"];
const wishlist = ["Mouse", "Monitor", "Laptop Stand","Laptop"];
console.log(addCart(cart,wishlist));