// // ---
const hamMenuBtn = document.querySelector('.nav-menu--btn')
const navMenu = document.querySelector('#navMenu')
const headerHamMenuBtn = hamMenuBtn.querySelector('.main-ham-menu')
const headerHamMenuCloseBtn = hamMenuBtn.querySelector('.main-ham-menu-close')
const headerNavMenuLinks = navMenu.querySelectorAll('a')
const headerClose = document.querySelector('.blurry-close')

hamMenuBtn.addEventListener('click', () => {
  if (navMenu.classList.contains('menu--active')) {
    navMenu.classList.toggle('menu--active')
    document.body.classList.toggle('menu-open')
  } else {
    navMenu.classList.toggle('menu--active')
    document.body.classList.toggle('menu-open')
    navMenu.focus({ preventScroll: true })
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.toggle('d-none')
    headerHamMenuCloseBtn.classList.toggle('d-none')
  } else {
    headerHamMenuBtn.classList.toggle('d-none')
    headerHamMenuCloseBtn.classList.toggle('d-none')
  }
})

function closeMenu() {
    navMenu.classList.toggle('menu--active')
    headerHamMenuBtn.classList.toggle('d-none')
    headerHamMenuCloseBtn.classList.toggle('d-none')
    document.body.classList.toggle('menu-open')
}

for (let link of headerNavMenuLinks) {
  link.addEventListener('click', closeMenu)
}

headerClose.addEventListener('click', closeMenu)

// // ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {
//   location.href = 'index.html'
// })
