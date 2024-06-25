//MENU
const menu = document.querySelector('.menu')

function menuChecker(windowWidth) {
  if (windowWidth > 1365) {
    menu.classList.remove('menu--hidden')
  } else {
    menu.classList.add('menu--hidden')
  }
}

//BUTTON HAMBURGER
const burger = document.querySelector('.button--hamburger')
const closeMenu = document.querySelector('.button--close')
const overlay = document.querySelector('.overlay')

window.addEventListener('resize', () => {
  if (
    menu.classList.contains('menu--hidden') &&
    !overlay.classList.contains('overlay--hidden')
  ) {
    menu.classList.remove('menu--hidden')
    console.log(menu.classList.contains('menu--hidden'))
  }
  if (windowWidth > 1365) {
    overlay.classList.add('overlay--hidden')
  }
})

burger.addEventListener('click', () => {
  menu.classList.remove('menu--hidden')
  overlay.classList.remove('overlay--hidden')
})

closeMenu.addEventListener('click', () => {
  menu.classList.add('menu--hidden')
  overlay.classList.add('overlay--hidden')
})

overlay.addEventListener('click', () => {
  if (windowWidth < 1366) {
    menu.classList.add('menu--hidden')
    overlay.classList.add('overlay--hidden')
    popup.classList.add('popup--hid')
    overlay.style.zIndex = '9'
  }
})
