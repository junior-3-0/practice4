//CARDS

export const repairTech = document.querySelector('.tech-wrap')
export const cardsTech = repairTech.querySelectorAll('.card')
export const btnMoreTech = repairTech.querySelector('.btn--more')
export const btnCloseTech = repairTech.querySelector('.btn--close')

export const repairBrand = document.querySelector('.brand-wrap')
export const cardsBrand = repairBrand.querySelectorAll('.card')
export const btnMoreBrand = repairBrand.querySelector('.btn--more')
export const btnCloseBrand = repairBrand.querySelector('.btn--close')

export const pagination1 = document.querySelector('.swiper-pagination')
export const pagination2 = document.querySelector('.swiper-pagination-tech')
export const pagination3 = document.querySelector('.swiper-pagination-price')

export function numberCards(width) {
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
    addCards(cardsBrand, cardsBrand.length, btnMoreBrand)
    addCards(cardsTech, cardsTech.length, btnMoreTech)
  }
}

export function addCards(cards, number, button) {
  let windowWidth = window.innerWidth

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
    windowWidth = window.innerWidth
    if (windowWidth > 767) {
      addCards(cardsBrand, 6, btnMoreBrand)
    }
    if (windowWidth > 1199) {
      addCards(cardsBrand, 8, btnMoreBrand)
    }
    if (windowWidth < 768) {
      addCards(cardsBrand, cardsBrand.length, btnMoreBrand)
    }

    btnCloseBrand.classList.add('btn--hid')
  })

  btnCloseTech.addEventListener('click', () => {
    windowWidth = window.innerWidth
    if (windowWidth > 767) {
      addCards(cardsTech, 3, btnMoreTech)
    }
    if (windowWidth > 1366) {
      addCards(cardsTech, 4, btnMoreTech)
    }
    if (windowWidth < 768) {
      addCards(cardsTech, cardsTech.length, btnMoreTech)
    }

    btnCloseTech.classList.add('btn--hid')
  })
}
