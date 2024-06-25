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
