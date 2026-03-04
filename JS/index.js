let cartCount = 0;
function addToCart(id){
    cartCount++;
    document.querySelector('.badge').innerText = cartCount;
    alert("Item added to cart!");
}