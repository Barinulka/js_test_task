'use strict';

let cartButtons = document.querySelectorAll('.product-btn-cart');
let cartPopup = document.querySelector('.cartPopup');


cartButtons.forEach(function(cartButton){
    cartButton.addEventListener('click', function(e){
        let cartElem = e.target;
        showCartPopup(cartElem);
    });
});


/**
 * Функция генерирует попап заказа при клике по кнопке
 */
function showCartPopup(cartElem) {
    let body = document.querySelector('body');
    let product = API.products.find(item => item.id == cartElem.getAttribute('data-id'));
    console.log(product);
    cartPopup.classList.remove('hidden');
    cartPopup.insertAdjacentHTML("beforeend", createCartPopup(product));
    
    let close = document.querySelector('.popup-close');
    // close.addEventListener('click', function(){
    //     closeCartPopup();
    // });
    
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
function createCartPopup(product) {
    console.log(product);
    let string = `
        <h3 class="popupCart-title">Вы добавили в карзину:</h3>
        <div class="popupCart-info">    
                <img class="popupCart-info-img" src="${product.img}" alt="img">
            <div class="popupCart-info-block">
                <span class="popupCart-info-block-title">${product.title} руб.</span>
                <span class="popupCart-info-block-price">${product.price} руб.</span>
            </div>
        </div>
        <button class="product-btn-show popupCart-btn" data-id="${product.id}">Перейти в карзину</button>
        <div class="popupCart-delete"></div>
    `;
    

    return string;
}

/**
 * Функция закрывает попап и очищает его
 */
// function closePopup() {
//         // let parent = e.target.parentNode;
//         if(!popup.classList.contains('hidden')) {
//             popup.classList.add('hidden');
//             popup.innerHTML = "";
//         }
        
// }