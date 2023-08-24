const refs = {
    openModal: document.querySelectorAll('[data-modal-open]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

const markupRoom = `<div class="modal room-modal">
      <button type="button" class="room-btn-close" data-close-modal>
        <svg class="room-close">
          <use href="./img/sprite.svg#icon-close"></use>
        </svg>
      </button>
      <h2 class="modal-title">BOOK A room</h2>
      <form class="form">
        <div class="label-wrap">
          <input
            id="room-name"
            type="text"
            class="modal-input"
            placeholder="Your name"
            pattern="[A-z]{2,20}"
            required
          />
          <label class="form-text" for="room-name"
            >Who should book a table for?</label
          >
        </div>
        <div class="label-wrap">
          <input
            id="room-tel"
            type="tel"
            class="modal-input"
            placeholder="+ 38 ()"
            pattern="\+?[0-9]{3}-[0-9]{3}-[0-9]+{4}"
            required
          />
          <label class="form-text" for="room-tel"> Phone number</label>
        </div>
        <div class="label-wrap">
          <select class="select" name="room-select" id="room-select">
            <option value="date">TODAY</option>
            <option value="1">02.02.2023</option>
            <option value="2">03.02.2023</option>
            <option value="3">04.02.2023</option>
          </select>
          <label class="form-text datetime" for="room-select"
            >What date to book?</label
          >
        </div>
        <div class="datetime-wrap label-wrap">
          <input
            id="room-datetime"
            class="modal-input"
            type="date"
            placeholder="25/04/2023"
          />
          <label class="form-text datetime" for="room-datetime"
            >Check-in date</label
          >
        </div>
        <div class="label-wrap">
          <select class="select" name="room-select" id="room-list">
            <option value="date">Double suite</option>
            <option value="1">Double luxury room</option>
            <option value="2">Triple Room</option>
            <option value="3">four-seater room</option>
          </select>
          <label class="form-text datetime" for="room-list"
            >Number category</label
          >
        </div>
        <button class="form-btn" type="submit">MAKE A RESERVATION</button>
      </form>
    </div>
  </div>`;

refs.openModal.forEach((el) => {
  el.addEventListener('click', addModal);
  }) 


function addModal(event) {
    refs.backdrop.classList.toggle('activ')
    refs.backdrop.innerHTML += markupRoom;

    const closeModal = document.querySelector('[data-close-modal]');

    closeModal.addEventListener('click', closeDrop);

    function closeDrop(event) {
        refs.backdrop.classList.toggle('activ');
        refs.backdrop.innerHTML = '';
        
    }
}
