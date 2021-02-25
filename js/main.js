var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let category1 = document.querySelector('.category-service');
let category2 = document.querySelector('.category-grade');

function categoryNoActive() {
  category1.classList.remove('category-active');
  category2.classList.remove('category-active');
}
function categoryActive1() {
  category2.classList.remove('category-active');
  category1.classList.add('category-active');
}
function categoryActive2() {
  category1.classList.remove('category-active');
  category2.classList.add('category-active');
}



const serviceBtn = document.querySelectorAll('.service__button');
const serviceToggle = document.querySelectorAll('.service__toggle');


document.querySelectorAll('.service__button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    this.classList.toggle('service__button--active');
    this.nextElementSibling.classList.toggle('service__toggle--active');
  });
});

let noHidden = document.querySelectorAll('.project__card');
for (let i = 15; i < noHidden.length; i++) {
  noHidden[i].classList.add('hidden');
}


let more = document.querySelectorAll('.more');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function () {
    var showPerClick = 5;

    var hidden = this.parentNode.querySelectorAll('div.hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";
      hidden[i].classList.remove('hidden');
    }
  });
}


let nav = document.querySelector('.nav');
let iconClose = document.querySelector('.nav-close');

function menu() {
  nav.style.transition = '0.5s';
  nav.style.right = '0';
  iconClose.style.transition = '0.5s';
}
function close() {
  nav.style.transition = '0.5s';
  nav.style.right = '-673px';
}

document.querySelector('#menu').onclick = menu;
document.querySelector('.close').onclick = close;

document.body.addEventListener('click', (e) => {
  let target = e.target;
  if (target.className === 'header-nav__menu') {
    return;
  }
  else if (target.className === 'nav') {
    return;
  }
  nav.style.right = '-673px';
});

let offer = document.querySelector('.offer');
function offerButton() {
  offer.style.display = 'flex';
  offer.style.transition = '0.4s';
  setTimeout(() => offer.style.opacity = '1', 100);
}
function offerClose() {
  offer.style.transition = '0.5s';
  offer.style.opacity = '0';
  setTimeout(() => offer.style.display = 'none', 500);
}
document.querySelector('.offer-button').onclick = offerButton;
document.querySelector('.offer-close').onclick = offerClose;
document.querySelector('.mobile-close').onclick = offerClose;

let headerMenu = document.querySelector('.header');
let scrollPos = 0;
document.onscroll = function () {
  let position = window.scrollY;
  if (position > 200) {
    if (position >= scrollPos) {
      headerMenu.style.transition = '0.55s';
      headerMenu.style.marginTop = '-100px';
    }
    else {
      headerMenu.style.marginTop = '0';
    }
    scrollPos = position;
    let heightBody = document.body.scrollHeight;
    if ((heightBody - window.innerHeight - 100) < scrollPos) {
      document.querySelector('.offer-button').style.opacity = '0';
    }
    else {
      document.querySelector('.offer-button').style.opacity = '1';
    }
  }
}