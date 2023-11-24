document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            total += productPrice;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            cartTotal.textContent = total.toFixed(2);
        });
    });

    // Delete from Cart functionality
    cartItems.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'LI') {
            const itemText = e.target.textContent;
            const itemPrice = parseFloat(itemText.split(' - ')[1].replace('$', ''));
            total -= itemPrice;

            e.target.remove();

            cartTotal.textContent = total.toFixed(2);
        }
    });
});
