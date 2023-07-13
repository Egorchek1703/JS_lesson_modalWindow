let openButtons = document.querySelectorAll('.open-mw')
let closeElements = document.querySelectorAll('.close-mw')

let modalOverlay = document.querySelector('.modal-overlay')
let modalWindow = document.querySelector('.modal-window')

function openModalWindow(){
    modalOverlay.style.zIndex = '1'
    modalOverlay.classList.add('show-modal-overlay')
    modalWindow.classList.add('show-modal-window')
}

// Сделал функцией чтобы в дальнейшем добавлять модальное окно в коде динамически, а не по умолчанию
// Для этого поиск элементов, позволяющих закрыть окно, нужно будет осуществлять внутри функции
function closeModalWindow(){
    setTimeout(()=>{
        modalOverlay.style.zIndex = '-1'
    }, 1000)
    modalOverlay.classList.remove('show-modal-overlay')
    modalWindow.classList.remove('show-modal-window')
}

for(let i=0; i<openButtons.length; i++){
    openButtons[i].addEventListener('click', openModalWindow)
}

for(let i=0; i<closeElements.length; i++){
    closeElements[i].addEventListener('click', closeModalWindow)
}