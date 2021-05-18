'use strict';

let cartButtons = document.querySelectorAll('.product-btn-cart');
let cartPopupElem = document.querySelector('.cartPopup-elem');
let cartPopup = document.querySelector('.cartPopup');
let cart = document.querySelector('.cart');
let bodyElem = document.querySelector('body');
let titleHidden = document.querySelector('.cartPopup-title-hidden');
let popupCartDel = document.querySelector('.popupCart-delete');

// Массив, куда будут записываться объекты выбранных товаров
let arr = [];

// По умолчанию, если массив еще не заполнен отображается 0
if (arr.length == 0) {
    cart.innerText = 0;
}


/**
 * При клике на кнопку "В корзину" добавляется выбранный товар в массив 
 * и увеличивается счетчик на иконке карзины
 */
cartButtons.forEach(function(cartButton){
    cartButton.addEventListener('click', function(e){
        let cartElem = e.target;
        addToCart(cartElem);
    });
});

/**
 * Обработчик клика по иконки карзины
 */
cart.addEventListener('click', function(e){
    if(cartPopup.classList.contains('hidden')) {
        showCartPopup();
        cartPopup.classList.remove('hidden');
    } else {
        cartPopup.classList.add('hidden');
    }
});



/**
 * Добавляем объект товара в массив и обновляем счетчик 
 * @param {*} cartElem Нажатая кнопка
 */
function addToCart(cartElem) {
    let product = API.products.find(item => item.id == cartElem.getAttribute('data-id'));
    arr.push(product);
    cartPopupElem.insertAdjacentHTML("beforeend", addProduct(product));
    cart.innerText = arr.length;   
}

/**
 * Функция генерирует попап карзины при клике по кнопке
 */
function showCartPopup() {
    if (arr.length == 0) {
        titleHidden.style.display = 'block';
    } else {
        titleHidden.style.display = 'none';
    } 
}

/**
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для товара 
*/
function addProduct(product) {
    console.log(product);
    let string = `<div class="popupCart-info">   
        <img class="popupCart-info-img" src="${product.img}" alt="img">
        <div class="popupCart-info-block">
            <span class="popupCart-info-block-title">${product.title}</span>
            <span class="popupCart-info-block-price">${product.price} руб.</span>
        </div>
        <div class="popupCart-delete" data-attr="${product.id}"></div> 
    </div>`;

    return string;
}
