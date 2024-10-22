// // ---
const hamMenuBtn = document.querySelector('.nav-menu--btn')
const navMenu = document.querySelector('#navMenu')
const headerHamMenuBtn = hamMenuBtn.querySelector('.main-ham-menu')
const headerHamMenuCloseBtn = hamMenuBtn.querySelector('.main-ham-menu-close')
const headerNavMenuLinks = navMenu.querySelectorAll('a')

hamMenuBtn.addEventListener('click', () => {
  if (navMenu.classList.contains('menu--active')) {
    navMenu.classList.toggle('menu--active')
  } else {
    navMenu.classList.toggle('menu--active')
    navMenu.focus({ preventScroll:true })
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
}

for (let link of headerNavMenuLinks) {
  link.addEventListener('click', closeMenu)
}

// // ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {
//   location.href = 'index.html'
// })
