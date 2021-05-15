'use strict';

let wrapper = document.querySelector('.product-listing-wrapper');

/**
 * Функция инициализации работы скрипта
 */
function init() {
    productListing();
}

/**
 * Функция генерирует разметку листинга товаров 
 * Данные берутся из API.products
 */
function productListing() {
    for (let product of API.products) {
        wrapper.insertAdjacentHTML('beforeend', constructProduct(product));
    }
}

/**
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для товара 
 * <div>
 *     <img>Картинка</img>
 *     <div>
 *         <h3>Название</h3>
 *         <span>Цена</span>
 *     </div>
 *     <div>    
 *         <button>Заказать</button>
 *         <button>В корзину</button>
 *     </div>
 * </div>
 */
function constructProduct(product) {
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


init();