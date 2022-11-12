'use-strict'

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenuContent = document.querySelector('.burger-menu__content'),
    burgerBtns = document.querySelectorAll('.burger-btn'),
    burgerMenuNavLinks = document.querySelectorAll('.burger-menu__nav-link')

  const burgerMenuInit = (target) => {
    if ( !!target.closest('.burger-btn')) {
      burgerBtns.forEach(btn => btn.classList.toggle('burger-btn_active'))
      burgerMenuContent.classList.toggle('burger-menu__content_visible')
    } else if (!target.closest('.burger-menu__bar') && !target.closest('.burger-btn')) {
      burgerBtns.forEach(btn => btn.classList.remove('burger-btn_active'))
      burgerMenuContent.classList.remove('burger-menu__content_visible')
    }

    if (target.closest('.burger-menu__nav-link')) {
      burgerMenuNavLinks.forEach(link => link.classList.remove('burger-menu__nav-link_active'))
      target.classList.add('burger-menu__nav-link_active')
    }
  }

  const sliderInit = () => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      speed: 400,
      slidesPerView: 'auto',
      spaceBetween: 20,
      mousewheel: {
        sensitivity: 2
      }
    })

  }
  sliderInit()

  document.addEventListener('click', e => {
    const target = e.target

    burgerMenuInit(target)
  })
})