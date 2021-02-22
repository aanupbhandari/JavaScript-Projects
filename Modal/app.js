// select items
const modalBtn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// functionality to open the model
modalBtn.addEventListener('click', function(){
    modalOverlay.classList.toggle('open-modal')
})

// functionality to close the model

closeBtn.addEventListener('click', function(){
        modalOverlay.classList.remove('open-modal')

})