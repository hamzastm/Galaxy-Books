import { cart, ClearItems, removeFromCart, updateCartQuan } from "../data/cart.js";
import { books } from "../data/books.js";
import { genBar } from "./defMapping.js";

genBar();
updateCartQuan();

function renderCart() {
    let cartBooksHTML = '';
    const itemsContainer = document.querySelector('.items');

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<span style="font-size: 20px; color: var(--mainhover)">Your cart is empty.</span>`;
        document.querySelector('.cart-control').style.display = 'none';
        return;
    } else {
        document.querySelector('.cart-control').style.display = 'flex';
    }

    cart.forEach((item) => {
        const book = books.find(b => b.id === item.id);
        if (!book) return;

        cartBooksHTML += `
            <div class="item js-item-id-${item.id}" id="cart-item">
                <img src="${book.image}" alt="${book.name}" height="300px" width="220px">
                <div class="book-detail">
                    <h3>${book.name}</h3>
                    <hr>
                    <div>
                        <h3>Price</h3><span class="price">${(book.price / 100).toFixed(2)} JOD</span>
                    </div>
                    <hr>
                    <div>
                        <h3>Quantity: <span style="color:var(--alert-darkred-solid);">${item.qun}</span></h3>
                    </div>
                    <hr>
                    <div>
                        <h3>
                            <input type="checkbox" id="wrap-${item.id}" class="book-wrap-option">
                            <label for="wrap-${item.id}">Gift Wrap</label>
                        </h3>
                    </div>
                </div>
                <button class="delete-btn" data-book-id="${item.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--alert-darkred-solid);"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                </button>
            </div>
        `;
    });

    itemsContainer.innerHTML = cartBooksHTML;

    // Re-attach listeners
    document.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const bookId = btn.dataset.bookId;
            removeFromCart(bookId);
            updateOrderSummary();
            renderCart(); // Re-render to update list and totals
        });
    });
}

function updateOrderSummary() {
    let totalQuantity = 0;
    cart.forEach(item => totalQuantity += item.qun);

    // Pricing Rules
    // Standard Price: 3.00 JOD
    // Bulk Price (3+ items): 2.50 JOD
    // Delivery: 2.00 JOD

    const standardPrice = 3.00;
    const bulkPrice = 2.50;
    const deliveryFee = 2.00;

    let unitPrice = standardPrice;
    let isBulkDiscount = false;

    if (totalQuantity >= 3) {
        unitPrice = bulkPrice;
        isBulkDiscount = true;
    }

    const subtotal = totalQuantity * standardPrice; // Calculate subtotal at standard price
    const totalBookPrice = totalQuantity * unitPrice;
    const discount = subtotal - totalBookPrice;
    const finalTotal = totalBookPrice + deliveryFee;

    // Update UI
    document.querySelector('#subtotal-price').textContent = `${subtotal.toFixed(2)} JOD`;

    const discountRow = document.querySelector('.discount-row');
    if (isBulkDiscount) {
        discountRow.style.display = 'flex';
        document.querySelector('#discount-amount').textContent = `-${discount.toFixed(2)} JOD`;
    } else {
        discountRow.style.display = 'none';
    }

    document.querySelector('#FinalPrice').textContent = `${finalTotal.toFixed(2)} JOD`;
}

// Initial Render
renderCart();
updateOrderSummary();

document.querySelector('.ClearBtn').addEventListener("click", () => {
    ClearItems();
    renderCart();
    updateOrderSummary();
});

// Checkout Form Handling
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phoneNumber').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Simple validation is handled by HTML5 attributes (required, pattern)
        // Additional checks can be added here if needed

        const orderDetails = {
            name,
            phone,
            city,
            address,
            payment,
            items: cart,
            total: document.querySelector('#FinalPrice').textContent
        };

        console.log("Order Confirmed:", orderDetails);
        alert(`Thank you, ${name}! Your order has been placed.\nTotal: ${orderDetails.total}\nPayment: ${payment.toUpperCase()}`);

        ClearItems();
        renderCart();
        updateOrderSummary();
        checkoutForm.reset();
    });
}