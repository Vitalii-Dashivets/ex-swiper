;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal-buy]'),
  }
  refs.openModalBtns.forEach(openModalBtn => openModalBtn.addEventListener('click', toggleModal))
  refs.closeModalBtn.forEach(closeModalBtn => closeModalBtn.addEventListener('click', toggleModal))
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }
})()