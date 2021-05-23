'use strict';

let btns = document.querySelectorAll('button');
let orderPopup = document.querySelector('.orderPopup');
let cartPopup = document.querySelector('.cartPopup');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        let dataId = e.target.getAttribute('data-id');
        let value = e.target.innerText;
        
        showPopup(dataId, value);
    });
});

/**
 * Функция по переданному с кнопки id и текста
 *  будет искать нужный объект в массиве и показывать попап
 */
function showPopup(id, value) {
    let product = API.products.find(item => item.id == id);
    if (value == 'Заказать') {
        orderPopup.insertAdjacentHTML('beforeend', generatePopupOrder(product));
        orderPopup.classList.remove('hidden');

        let closeOrderPopup = document.querySelector('.popup-close');

        closeOrderPopup.addEventListener('click', function(){
           closePopup();
        });
    } else if (value == 'В корзину') {
        cartPopup.insertAdjacentHTML('beforeend', generatePopupCart(product));
        cartPopup.classList.add('animate__bounceInDown');
        cartPopup.classList.remove('hidden');

        setTimeout(function(){
            cartPopup.classList.add('hidden');
            cartPopup.innerHTML = "";
        }, 3000);
    }
}


/**
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для попапа заказа 
*/
function generatePopupOrder(product) {
    console.log(product);
    let string = `<div class="popup">
        <h3 class="popup-title">${product.title}</h3>
        <div class="popup-info">    
            <div class="popup-info-block">
                <img class="popup-info-block-img" src="${product.img}" alt="img">
                <span class="popup-info-block-price">${product.price} руб.</span>
            </div>
            <div class="popup-info-comment">
                <label for="comment">Комментарий к заказу:</label>
                <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="popup-phone">
            <label for="phone">Ваш телефон*:</label>
            <input type="phone" id="phone" required>
        </div>
        <button class="product-btn-show popup-btn" data-id="${product.id}">Отправить</button>
        <div class="popup-close"></div>
    </div>`;
    
    return string;
}

/**
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для попапа заказа 
*/
function generatePopupCart(product) {
    console.log(product);
    let string = `<div class="popup_cart-rotate"></div>
    <h3 class="popup_cart-add">Вы добавили в корзину:</h3>
    <div class="popup_cart">
        <div class="popup_cart-info"> 
            <img class="popup_cart-info-img" src="${product.img}" alt="img">
            <h3 class="popup_cart-info-title">${product.title}</h3>
        </div>
        <span class="popup_cart-info-block-price">${product.price} руб.</span>
    </div>
    <button class="product-btn-show popup-btn" data-id="${product.id}">Перейти в корзину</button>`;
    
    return string;
}

function closePopup() {
    if(!orderPopup.classList.contains('hidden')){
        orderPopup.classList.add('hidden');
        orderPopup.innerHTML = "";
    }
}
