(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-room]'),
    closeModalBtn: document.querySelector('[data-modal-close-room]'),
    modal: document.querySelector('[data-modal-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
