let menuToggle = document.querySelector('.menu-toggle');
let header = document.querySelector('nav');
let subMenus = document.querySelectorAll('.sub-menu');

menuToggle.onclick = function()
{
    header.classList.toggle('active');
}

subMenus.forEach((subMenu) => {
    let arrow = subMenu.querySelector('.arrow');
    let dropdown = subMenu.querySelector('ul');
  
    arrow.onclick = function () {
      dropdown.classList.toggle('active');
    };
  });