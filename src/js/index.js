import '../scss/style.scss'

import { Swiper } from '../blocks/swiper/swiper-bundle.min'
import { swiperReloader } from '../blocks/swiper/swiper'

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
})

document.addEventListener('DOMContentLoaded', () => {
  menuChecker(windowWidth)
})
