'use strict';

let buttons = document.querySelectorAll('.product-btn-show');
let popup = document.querySelector('.orderPopup');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let elem = e.target;

        showPopup(elem);
    });
});

/**
 * Функция генерирует попап заказа при клике по кнопке
 */
function showPopup(elem) {
    let body = document.querySelector('body');
    let product = API.products.find(item => item.id == elem.getAttribute('data-id'));

    popup.classList.remove('hidden');
    popup.insertAdjacentHTML("beforeend", createPopup(product));
}

/**
 * @param {number} product.id id продукта
 * @param {string} product.title название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.img путь до картинки товара
 * @returns {string} html-разметка для товара 
 * <div>
 *     <h3>Название</h3>
 *     <div>
 *         <img>Картинка</img>    
 *         <span>Цена</span>
 *     </div>
 *     <div>
 *          <label>Комментарий</label>
 *          <textarea>
 *     </div>
 *     <label>Телефон</label>
 *     <input>
 *     <button>Заказать</button>
 * </div>
 */
 function createPopup(product) {
    console.log(product);
    let string = `<div class="popup">
        <h3 class="popup-title">${product.title}</h3>
        <div class="popup-info">    
            <div class="popup-info-block">
                <img class="popup-info-img" src="${product.img}" alt="img">
                <span class="popup-info-price">${product.price} руб.</span>
            </div>
            <div class="popup-info-comment">
                <label>Комментарий к заказу</label>
            </div>
        </div>
    </div>`;
    
    return string;
}