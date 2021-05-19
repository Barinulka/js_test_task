'use strict';

let btns = document.querySelectorAll('button');
let orderPopup = document.querySelector('.orderPopup');
let cartPopup = document.querySelector('.cartPopup');

orderPopup.classList.add('animate__animated', 'animate__bounceIn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        let dataId = e.target.getAttribute('data-id');
        let value = e.target.innerText;
        console.log(dataId);
        console.log(value);
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
        orderPopup.innerHTML = "";
        orderPopup.insertAdjacentHTML('beforeend', generatePopupOrder(product));
        orderPopup.classList.remove('hidden');

        let closeOrderPopup = document.querySelector('.popup-close');

        closeOrderPopup.addEventListener('click', function(){
            if(!orderPopup.classList.contains('hidden')){
                orderPopup.classList.add('hidden');
            }
        });
    } else if (value == 'В корзину') {
        console.log('функционал на стадии разработки');
        // cartPopup.insertAdjacentHTML('beforeend', generatePopupCart(product));
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

// /**
//  * Функция принимает элемент кнопки
//  * отрабатывает нажатие по этой кнопке
//  * закрывает попап и очищает его
//  */
// function closePopup() {
//         // let parent = e.target.parentNode;
//         if(!popup.classList.contains('hidden')) {
//             popup.classList.add('hidden');
//             popup.innerHTML = "";
//         }
        
// }