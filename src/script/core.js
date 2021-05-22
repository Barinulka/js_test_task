'use strict';

let wrapper = document.querySelector('.product-listing-wrapper');
wrapper.innerHTML = "<div class='container'></div>";

let container = document.querySelector('.container');
const products = API.products;

function init() {
    addHTML();
}

/**
 * Функция перебирает имеющийся API и вставляет разметку на страницу
 */
function addHTML() {
    for (let product of products) {
        container.insertAdjacentHTML('beforeend', generateHTML(product));
    }
    wrapper.insertAdjacentHTML('beforeend', generateOrderPopup());
    wrapper.insertAdjacentHTML('beforeend', generateCartPopup());
}


/**
 * Формируем разметку
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для товара 
 */
function generateHTML(product) {
    let string = `<div class="product">
        <img class="product-img" src="${product.img}" alt="img">
        <div class="product-info">
            <h3 class="product-info-title">${product.title}</h3>
            <span class="product-info-price">${product.price} руб.</span>
        </div>
        <div class="product-btn">
            <button class="product-btn-show" data-id="${product.id}">Заказать</button>
            <button class="product-btn-cart" data-id="${product.id}">В корзину</button>
        </div>  
    </div>`;

    return string;
}

/**
 * @returns {string} html - разметка для попапа заказа
 */
function generateOrderPopup() {
    let stringOrder = '<div class="orderPopup hidden"></div>';

    return stringOrder;
}

/**
 * @returns {string} html - разметка для попапа корзины
 */
function generateCartPopup() {
    let stringCart = '<div class="cartPopup"></div>';

    return stringCart;
}

init();

