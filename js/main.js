
let slideUp = (target, duration = 500) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}
let checkSlideItem = false;
let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none' && checkSlideItem == false) {
    checkSlideItem = true;
    setTimeout(function () {
      checkSlideItem = false;
    }, 500)
    return slideDown(target, duration);

  } else {
    checkSlideItem = true;
    setTimeout(function () {
      checkSlideItem = false;
    }, 500)
    return slideUp(target, duration);
  }
}

const body = document.querySelector('body'),
  html = document.querySelector('html'),
  menu = document.querySelectorAll('._burger, .header__nav, body'),
  burger = document.querySelector('._burger'),
  header = document.querySelector('.header');



let thisTarget, thisMouseoverTarget, thisMouseoutTarget;

body.addEventListener('mouseover', function (e) {
  thisMouseoverTarget = e.target;

  let dropDown = thisMouseoverTarget.closest('._drop-down');
  if (dropDown) {
    if (!dropDown.classList.contains('_active')) {
      dropDown.classList.add('_active');
    }
  }

});

body.addEventListener('mouseout', function (e) {
  thisMouseoutTarget = e.target;

  let dropDown = thisMouseoverTarget.closest('._drop-down');
  if (dropDown) {
    if (dropDown.classList.contains('_active')) {
      dropDown.classList.remove('_active');
    }

  }

});

document.querySelectorAll('.faq__item--content').forEach(element => {

  if (!element.closest('.faq__item._active')) {
    element.style.display = 'none';
  } else {
    slideDown(element);
  }

})


let faqItemCheck = true;
body.addEventListener('click', function (e) {

  thisTarget = e.target;

  // Меню в шапке
  if (thisTarget.closest('._burger')) {
    menu.forEach(elem => {
      elem.classList.toggle('_active')
    })
  }

  let dropDownIntro = thisTarget.closest('._drop-down-intro'),
    dropDownParent = (dropDownIntro) ? dropDownIntro.closest('._drop-down') : false;
  if (dropDownIntro) {

    if (!dropDownParent.classList.contains('_active')) {
      dropDownParent.classList.add('_active');
    }

  } else if (!thisTarget.closest('._drop-down')) {

    document.querySelectorAll('._drop-down').forEach(element => {
      element.classList.remove('_active');
    })

  }

  let btnToScroll = thisTarget.closest('._btn-to-scroll');
  if (btnToScroll) {

    e.preventDefault();
    let section = document.querySelector(btnToScroll.getAttribute('href'));

    section = (section) ? section : 0;

    if (section) {
      menu.forEach(elem => {
        elem.classList.remove('_active')
      })
      window.scroll({
        left: 0,
        top: section.offsetTop,
        behavior: 'smooth'
      })

    }

  }



  let faqItemTitle = thisTarget.closest('.faq__item--title');
  if (faqItemTitle) {

    let faqItem = faqItemTitle.closest('.faq__item');

    if (!faqItem.classList.contains('_active') && faqItemCheck) {


      faqItemCheck = false;


      document.querySelectorAll('.faq__item._active').forEach(element => {
        element.classList.remove('_active');
        slideUp(element.querySelector('.faq__item--content'));
      })

      faqItem.classList.add('_active');
      slideDown(faqItem.querySelector('.faq__item--content'));


      setTimeout(function () {
        faqItemCheck = true;
      }, 500)


    } else if (faqItem.classList.contains('_active') && faqItemCheck) {


      faqItemCheck = false;

      faqItem.classList.remove('_active');
      slideUp(faqItem.querySelector('.faq__item--content'));


      setTimeout(function () {
        faqItemCheck = true;
      }, 500)


    }
    /* faqItem.querySelector('.faq__item--content') */

  }

})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let opportunitiesSlider = new Swiper('.opportunities__slider', {

  spaceBetween: 5,
  slidesPerView: 1,
  /* centeredSlides: false, */

  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1336: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1900: {
      slidesPerView: 3,
    },


  }
});

let roadMapSlider = new Swiper('.road-map__slider', {

  spaceBetween: 0,
  slidesPerView: 1,
  /* centeredSlides: false, */

  loop: true,
  loopedSlides: 4,
  /* pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }, */
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1550: {
      slidesPerView: 3,
    },


  }
});

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=- <Появление шапки при скроле> -=-=-=-=-=-=-=-=-=-=-=-=

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}

function scrollPage() {

  const offsetCheckJs = document.querySelector('.offset-check-js');
  let top = [getCoords(offsetCheckJs).top, false];

  header.classList.add('_loaded');

  function scrollPageFunc() {
    top[0] = getCoords(offsetCheckJs).top;

    if (top[0] >= 300 && top[1] == false) {

      top[1] = true;
      header.style.setProperty('--pos', '-100%');

      setTimeout(function () {
        header.classList.add('_active');
        header.style.setProperty('--pos', '0%');
      }, 200);

    } else if (top[0] <= 300 && top[1] == true) {

      top[1] = false;
      header.style.setProperty('--pos', '-100%');

      setTimeout(function () {
        header.style.setProperty('--pos', '0%');
        header.classList.remove('_active');

      }, 200);

    }
  }

  scrollPageFunc();

  window.onscroll = scrollPageFunc;

}

scrollPage();


// =-=-=-=-=-=-=-=-=-=-=-=- </Появление шапки при скроле> -=-=-=-=-=-=-=-=-=-=-=-=

/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
