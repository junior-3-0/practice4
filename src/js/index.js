import '../scss/style.scss'

let windowWidth = window.innerWidth

import { swiperReloader } from '../blocks/swiper/swiper'
import { btnCloseTech, btnCloseBrand, numberCards } from '../blocks/card/card'
import { btnPost, openPost } from '../blocks/post/post'
import {
  burger,
  closeMenu,
  openMenu,
  closedMenu,
  overlay,
  overlayClick,
  popup,
  menu
} from '../blocks/menu/menu'
import {
  btnsMessage,
  btnsPhone,
  popupButtonClose,
  openPopupFormMessage,
  popupClosed,
  openPopupFormCall
} from '../blocks/popup/popup'

btnsMessage.forEach((btn) => {
  btn.addEventListener('click', openPopupFormMessage)
})
btnsPhone.forEach((btn) => {
  btn.addEventListener('click', openPopupFormCall)
})
popupButtonClose.addEventListener('click', popupClosed)

btnPost.addEventListener('click', openPost)

burger.addEventListener('click', openMenu)
closeMenu.addEventListener('click', closedMenu)
overlay.addEventListener('click', overlayClick)

//LOADED
window.addEventListener('DOMContentLoaded', () => {
  windowWidth = window.innerWidth
  btnCloseBrand.classList.add('btn--hid')
  btnCloseTech.classList.add('btn--hid')
  numberCards(windowWidth)
  swiperReloader()
})

//RESIZE
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
  btnCloseBrand.classList.add('btn--hid')
  btnCloseTech.classList.add('btn--hid')
  numberCards(windowWidth)
  swiperReloader()
  if (windowWidth > 1365 && popup.classList.contains('popup--hid')) {
    overlay.classList.add('overlay--hidden')
  }
  if (windowWidth < 1366 && !menu.classList.contains('menu--hidden')) {
    overlay.classList.remove('overlay--hidden')
  }
})
