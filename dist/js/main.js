const menuButton = document.querySelector('.menu-button');
const menuButtonHamburger = document.querySelector('.menu-button_hamburger');
const navBar = document.querySelector('.nav-bar');
const menuNavBar = document.querySelector('.menu-nav-bar');
const menuNavBarItems = document.querySelectorAll('.menu-nav-bar_item');

let showMenu = false;

// menuButton.addEventListener('click', toggleMenu);
// function toggleMenu() {
//   if (!showMenu) {
//     menuButtonHamburger.classList.add('open');

//     showMenu = true;
//   } else {
//     menuButtonHamburger.classList.remove('open');

//     showMenu = false;
//   }
// }

const toggleMenu = () => {
  if (!showMenu) {
    menuButtonHamburger.classList.add('open');
    navBar.classList.add('open');
    menuNavBar.classList.add('open');
    menuNavBarItems.forEach(item => {
      item.classList.add('open');
    });

    showMenu = true;
  } else {
    menuButtonHamburger.classList.remove('open');
    navBar.classList.remove('open');
    menuNavBar.classList.remove('open');
    menuNavBarItems.forEach(item => item.classList.remove('open'));
    

    showMenu = false;
  }
};

menuButton.addEventListener('click', toggleMenu);
