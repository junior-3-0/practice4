//POST
export const post = document.querySelector('.post')
export const btnPost = document.querySelector('.promo__btn')

export function openPost() {
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
}
