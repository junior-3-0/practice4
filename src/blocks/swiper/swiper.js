import { Swiper } from '../swiper/swiper-bundle.min'

//SWIPER
export function swiperReloader() {
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
}
