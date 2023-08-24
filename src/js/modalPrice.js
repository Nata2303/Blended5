const room = document.querySelector('.other-btn');
const refs = {
  openPrice: document.querySelectorAll('[data-open-price]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

const markupPrice = `<div class="modal-price">
            <button type="button" class="btn-close" data-close-price >
              <svg width="13" height="13">
                <use href="./img/sprite.svg#icon-close"></use>
              </svg>
            </button>
            <p class="modal-title list">
              prices per room
            </p>
            <p class="modal-suptitle">
              Double suite
            </p>
            <form class="form">
             <div class="form-wrap">
              <div class="select-wrap">
              <label class="label-name">
                <select class="select" name="number">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">5</option>
              </select>
               <span class="form-text">Number of nights</span>
              </label>
            </div>

                <label class="label-name">
                <input type="number" class="modal-input" placeholder="1000"  required>
                 <span class="form-text">UAH</span>
               </label>
               
                </div>
              <button type="submit" class="form-btn">make a reservation</button>
            </form>
        </div>`;

refs.openPrice.forEach(el => {
  el.addEventListener('click', openModalPrice);
});

function openModalPrice(evt) {
    refs.backdrop.classList.toggle('activ');
    refs.backdrop.innerHTML += markupPrice;

    const closePrice = document.querySelector('[data-close-price]')

    closePrice.addEventListener('click', closeModalPrice)

    function closeModalPrice(evt) {
        refs.backdrop.classList.toggle('activ');
        refs.backdrop.innerHTML = '';
    }
}