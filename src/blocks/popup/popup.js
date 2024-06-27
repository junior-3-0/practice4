//POPUP MESSAGE
export const btnsMessage = document.querySelectorAll('.button--message')
export const btnsPhone = document.querySelectorAll('.button--phone')
export const popupButtonClose = document.querySelector('.popup__button')
const popup = document.querySelector('.popup')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const textarea = document.querySelector('#message')
const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.menu')
let windowWidth = window.innerWidth

export function openPopupFormMessage() {
  if (!menu.classList.contains('menu--hidden') && windowWidth < 1366) {
    menu.classList.add('menu--hidden')
  }
  overlay.classList.remove('overlay--hidden')
  overlay.style.zIndex = '11'
  popup.classList.remove('popup--hid')

  inputName.classList.remove('input--hid')
  inputEmail.classList.remove('input--hid')
  textarea.classList.remove('input--hid')
}

export function popupClosed() {
  overlay.classList.add('overlay--hidden')
  popup.classList.add('popup--hid')
  overlay.style.zIndex = '9'
}

export function openPopupFormCall() {
  if (!menu.classList.contains('menu--hidden') && windowWidth < 1366) {
    menu.classList.add('menu--hidden')
  }
  overlay.classList.remove('overlay--hidden')
  overlay.style.zIndex = '11'
  popup.classList.remove('popup--hid')

  inputName.classList.add('input--hid')
  inputEmail.classList.add('input--hid')
  textarea.classList.add('input--hid')
}
