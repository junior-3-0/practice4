//POPUP MESSAGE
const btnsMessage = document.querySelectorAll('.button--message')
const btnsPhone = document.querySelectorAll('.button--phone')
const popupClose = document.querySelector('.popup__button')
const popup = document.querySelector('.popup')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const textarea = document.querySelector('#message')

btnsMessage.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!menu.classList.contains('menu--hidden') && windowWidth < 1366) {
      menu.classList.add('menu--hidden')
    }
    overlay.classList.remove('overlay--hidden')
    overlay.style.zIndex = '11'
    popup.classList.remove('popup--hid')
  })
})

popupClose.addEventListener('click', () => {
  overlay.classList.add('overlay--hidden')
  popup.classList.add('popup--hid')
  overlay.style.zIndex = '9'
})

btnsPhone.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!menu.classList.contains('menu--hidden') && windowWidth < 1366) {
      menu.classList.add('menu--hidden')
    }
    overlay.classList.remove('overlay--hidden')
    overlay.style.zIndex = '11'
    popup.classList.remove('popup--hid')

    inputName.classList.add('input--hid')
    inputEmail.classList.add('input--hid')
    textarea.classList.add('input--hid')
  })
})
