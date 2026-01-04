import { addToCart, updateCartQuan } from "../data/cart.js";
import { books } from "../data/books.js";
import { genBar } from "./defMapping.js";


console.log("Script.js starting...");
try {
    console.log("Generating Bar...");
    genBar();
    console.log("Bar generated.");
    console.log("Updating Cart Quan...");
    updateCartQuan();
    console.log("Cart Quan updated.");
} catch (error) {
    console.error("Error in script.js initialization:", error);
}

let booksHTML = '';

books.forEach((book) => {
    booksHTML += `
            <div class="book-card">
                <img src="${book.image}" width="100%" height ="400px">
                <div class = "price">
                    <h4>$ ${book.price / 100}</h4>
                    <h3>${book.name}</h3>
                </div>
                <span class="add-alert" data-book-id = "${book.id}">item add ✅</span>
                <button class="add-to-cart-btn" data-book-id="${book.id}" data-book-name = "${book.name}"> add to cart </button>
            </div>
        `;
});

document.querySelector(".most-populer-grid").innerHTML += booksHTML;


let addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

let alert1 = document.querySelectorAll(".add-alert");


addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        let bookId = btn.dataset.bookId;
        alert1.forEach((item) => {
            if (item.dataset.bookId === bookId) {
                item.classList.add('show');
                setTimeout(() => {
                    item.classList.remove('show');
                }, 2000);
            }
        });

        addToCart(bookId);
    });


});



const searchBar = document.querySelector('#searchBar');
const searchedElement = document.querySelector('.searched');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.trim().toLowerCase().replaceAll(' ', '');
    let showbook = '';

    if (!searchTerm) {
        searchedElement.innerHTML = '';
        searchedElement.classList.remove('show');
    }

    books.forEach((book) => {
        const bookName = book.name.trim().toLowerCase().replaceAll(' ', '');
        if (bookName.startsWith(searchTerm) && searchTerm !== '') {
            showbook += `
                <div class="searched-for">
                    <h3>${book.name}</h3>
                    <img src="${book.image}" width="60px" height="80px">
                </div>
            `;
        }
    });


    searchedElement.innerHTML = showbook;
    searchedElement.classList.toggle('show', showbook !== '');
});



