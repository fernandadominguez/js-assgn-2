const menuButton = document.querySelector('#menu-icon')

const closeButton = document.querySelector('#close-icon')
const menu = document.querySelector('#menu')

menuButton.addEventListener('click', function() {
    menu.className = 'menu-open'
})

closeButton.addEventListener('click', function() {
    menu.className = 'menu-close'
})