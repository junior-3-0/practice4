//MENU
export const menu = document.querySelector('.menu')
export const burger = document.querySelector('.button--hamburger')
export const closeMenu = document.querySelector('.button--close')
export const overlay = document.querySelector('.overlay')
export const popup = document.querySelector('.popup')
let windowWidth = window.innerWidth

export function openMenu() {
  menu.classList.remove('menu--hidden')
  overlay.classList.remove('overlay--hidden')
}

export function closedMenu() {
  menu.classList.add('menu--hidden')
  overlay.classList.add('overlay--hidden')
}

export function overlayClick() {
  windowWidth = window.innerWidth
  if (windowWidth < 1366) {
    menu.classList.add('menu--hidden')
    overlay.classList.add('overlay--hidden')
    popup.classList.add('popup--hid')
    overlay.style.zIndex = '9'
  }
}
