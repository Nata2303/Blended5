const e={modalTable:document.querySelectorAll("[data-modal-table]"),backdrop:document.querySelector("[data-backdrop]")},l=` <div class="modal">
    <button type="button" class="modal-close" data-close-table >
      <svg class="btn-close" width="13" height="13">
        <use href="./img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <p class="modal-title list">book a table</p>
    <form class="form">
      <label class="label-name">
        <input
          type="text"
          class="modal-input"
          placeholder="Your name"
          required
        />
        <span class="form-text">Who should book a table for?</span>
      </label>
      <div class="select-wrap">
        <label>
          <select class="select" name="number">
            <option class="option-number">NUMBER OF PEOPLE</option>
            <option class="option-number" value="1">1</option>
            <option class="option-number" value="2">2</option>
            <option class="option-number" value="3">3</option>
            <option class="option-number" value="5">5</option>
          </select>
        </label>
      </div>
      <label class="label-name">
        <input type="tel" class="modal-input" placeholder="+ 38()" required />
        <span class="form-text">Phone number</span>
      </label>

      <div class="select-wrap">
        <label class="label-name">
          <select class="select" name="date-number">
            <option value="date">TODAY</option>
            <option value="1">02.02.2023</option>
            <option value="2">03.02.2023</option>
            <option value="3">04.02.2023</option>
          </select>
          <span class="form-text">What date to book?</span>
        </label>
      </div>

      <button type="submit" class="form-btn">make a reservation</button>
    </form>
  </div>`;e.modalTable.forEach(o=>{o.addEventListener("click",t)});function t(o){e.backdrop.classList.toggle("activ"),e.backdrop.innerHTML+=l,document.querySelector("[data-close-table]").addEventListener("click",a);function a(n){e.backdrop.classList.toggle("activ"),e.backdrop.innerHTML=""}}
