(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-w-open]"),
    closeModalBtn: document.querySelector("[data-modal-w-close]"),
    modal: document.querySelector("[data-modal-w]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal2)
  refs.closeModalBtn.addEventListener("click", toggleModal2)

  function toggleModal2() {
    refs.modal.classList.toggle('is-hidden-w')
  }
})();