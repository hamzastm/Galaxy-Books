export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function removeFromCart(bookId) {
    let newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.id !== bookId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    document.querySelector(".badAlert").classList.add("ShowAlert");
    setTimeout(() => {
        document.querySelector(".badAlert").classList.remove("ShowAlert");
    }, 2000);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuan();
}


export function addToCart(bookId) {
    let sameBook;
    let cartcounterHTML = document.querySelector('#cart-items');


    cart.forEach((book) => {
        if (bookId === book.id)
            sameBook = book;
    });

    if (sameBook) {
        sameBook.qun++;
    } else {
        cart.push({ id: bookId, qun: 1 });
    }
    console.log(cart);
    let cartcounter = 0;
    cart.forEach((item) => {
        cartcounter += item.qun;
    })
    cartcounterHTML.innerHTML = cartcounter;

    document.querySelector(".goodAlert").classList.add("ShowAlert");
    setTimeout(() => {
        document.querySelector(".goodAlert").classList.remove("ShowAlert");
    }, 2000);


    console.log(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuan();
}


export function ClearItems() {
    cart = [];
    document.querySelector('.items').innerHTML = `
    <span style = "font-size: 20px; color: var(--mainhover)">the cart is empty add at least one item to show!</span>
    `;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuan();
}


export function updateCartQuan() {

    let cartcounterHTML = document.querySelector('#cart-items');
    let totalcartitems = 0;
    cart.forEach(cartItem => {
        totalcartitems += cartItem.qun;
    });

    if (cartcounterHTML) {
        cartcounterHTML.innerHTML = totalcartitems;
    } else {
        console.warn('Cart counter element not found');
    }
}
