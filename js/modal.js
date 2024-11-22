const modal_btn = document.querySelectorAll('.modal_btn');
const modals = document.querySelectorAll('.modal');
const modal_cerrar = document.querySelectorAll('.modal_cerrar');

// Asigna eventos a cada botón
modal_btn.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Abre el modal correspondiente al índice del botón
      modals[index].classList.add('modal_show');
    });
  });

  // Asigna eventos de cierre a cada modal
modals.forEach((modal) => {
    const closeButton = modal.querySelector('.modal_cerrar');
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal_show');
    });
  });



// modal_btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.add('modal_show');
// });
// modal_cerrar.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.remove('modal_show');
// })