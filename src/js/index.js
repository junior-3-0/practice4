import '../scss/style.scss'

import { Swiper } from '../blocks/swiper/swiper-bundle.min'
import { swiperReloader } from '../blocks/swiper/swiper'

/* //SWIPER
function swiperReloader() {
  let swiper

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) {
          swiper.destroy(true, true)
        }
        return
      }
    }

    breakpoint.addEventListener('resize', () => {
      checker()
    })
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.swiper-tech', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination-tech',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.swiper-price', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,
    centeredSlides: true,
    freeMode: true,
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination-price',
      clickable: true
    }
  })
} */

//CARDS

let windowWidth = window.innerWidth

const repairTech = document.querySelector('.tech-wrap')
const cardsTech = repairTech.querySelectorAll('.card')
const btnMoreTech = repairTech.querySelector('.btn--more')
const btnCloseTech = repairTech.querySelector('.btn--close')

const repairBrand = document.querySelector('.brand-wrap')
const cardsBrand = repairBrand.querySelectorAll('.card')
const btnMoreBrand = repairBrand.querySelector('.btn--more')
const btnCloseBrand = repairBrand.querySelector('.btn--close')

const pagination1 = document.querySelector('.swiper-pagination')
const pagination2 = document.querySelector('.swiper-pagination-tech')
const pagination3 = document.querySelector('.swiper-pagination-price')

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

function numberCards(width) {
  if (width > 767 && width < 1200) {
    pagination1.classList.add('swiper-pagination-hid')
    pagination2.classList.add('swiper-pagination-hid')
    pagination3.classList.add('swiper-pagination-hid')
    addCards(cardsBrand, 6, btnMoreBrand)
    addCards(cardsTech, 3, btnMoreTech)
  } else if (width > 1199) {
    addCards(cardsBrand, 8, btnMoreBrand)
    addCards(cardsTech, 4, btnMoreTech)
  } else {
    pagination1.classList.remove('swiper-pagination-hid')
    pagination2.classList.remove('swiper-pagination-hid')
    pagination3.classList.remove('swiper-pagination-hid')
    btnMoreTech.classList.add('btn--hid')
    btnMoreBrand.classList.add('btn--hid')
  }
}
// numberCards(windowWidth)

function addCards(cards, number, button) {
  cards.forEach((card, i) => {
    card.classList.add('card--hidden')
    if (i + 1 <= number) {
      card.classList.remove('card--hidden')
    } else if (i + 1 > number) {
      button.classList.remove('btn--hid')
    }
  })

  btnMoreBrand.addEventListener('click', () => {
    cardsBrand.forEach((card) => {
      card.classList.remove('card--hidden')
      btnMoreBrand.classList.add('btn--hid')
      btnCloseBrand.classList.remove('btn--hid')
    })
  })

  btnMoreTech.addEventListener('click', () => {
    cardsTech.forEach((card) => {
      card.classList.remove('card--hidden')
      btnMoreTech.classList.add('btn--hid')
      btnCloseTech.classList.remove('btn--hid')
    })
  })

  btnCloseBrand.addEventListener('click', () => {
    if (windowWidth > 767) {
      addCards(cardsBrand, 6, btnMoreBrand)
    }
    if (windowWidth > 1366) {
      addCards(cardsBrand, 8, btnMoreBrand)
    }
    btnCloseBrand.classList.add('btn--hid')
  })

  btnCloseTech.addEventListener('click', () => {
    if (windowWidth > 767) {
      addCards(cardsTech, 3, btnMoreTech)
    }
    if (windowWidth > 1366) {
      addCards(cardsTech, 4, btnMoreTech)
    }
    btnCloseTech.classList.add('btn--hid')
  })
}

//MENU
const menu = document.querySelector('.menu')

document.addEventListener('DOMContentLoaded', () => {
  // windowWidth = window.innerWidth
  menuChecker(windowWidth)
})
// window.addEventListener('resize', () => {
//   windowWidth = window.innerWidth
//   menuChecker(windowWidth)
// })

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

//POST
const post = document.querySelector('.post')
const btnPost = document.querySelector('.promo__btn')

btnPost.addEventListener('click', () => {
  if (!btnPost.classList.contains('btn--close')) {
    post.style.height = 'auto'
    btnPost.classList.remove('btn--more')
    btnPost.classList.add('btn--close')
    btnPost.innerHTML =
      '<img class="btn__img" src="./img/expand.svg" alt=""/>Скрыть'
  } else {
    post.style.height = 'clamp(9rem, 21vw, 16rem)'
    btnPost.classList.remove('btn--close')
    btnPost.classList.add('btn--more')
    btnPost.innerHTML =
      '<img class="btn__img" src="./img/expand.svg" alt=""/>Читать далее'
  }
})

//POPUP MESSAGE
const btnsMessage = document.querySelectorAll('.button--message')
const btnsPhone = document.querySelectorAll('.button--phone')
const popupClose = document.querySelector('.popup__button')
const popup = document.querySelector('.popup')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const textarea = document.querySelector('#message')

console.log(btnsMessage)
console.log(btnsPhone)

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
