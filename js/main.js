
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('._burger, .header__nav, body'),
    burger = document.querySelector('._burger'),
    header = document.querySelector('.header');



let thisTarget, thisMouseoverTarget, thisMouseoutTarget;

body.addEventListener('mouseover', function (e) {
  thisMouseoverTarget = e.target;

  let dropDown = thisMouseoverTarget.closest('._drop-down');
  if(dropDown) {
    if(!dropDown.classList.contains('_active')) {
      dropDown.classList.add('_active');
    }
  }

});

body.addEventListener('mouseout', function (e) {
  thisMouseoutTarget = e.target;

  let dropDown = thisMouseoverTarget.closest('._drop-down');
  if(dropDown) {
    if(dropDown.classList.contains('_active')) {
      dropDown.classList.remove('_active');
    }
    
  }

});

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

      if(!dropDownParent.classList.contains('_active')) {
        dropDownParent.classList.add('_active');
      } 

    } else if(!thisTarget.closest('._drop-down')) {

        document.querySelectorAll('._drop-down').forEach(element => {
          element.classList.remove('_active');
        })

    }

    let btnToScroll = thisTarget.closest('._btn-to-scroll');
    if(btnToScroll) {

        e.preventDefault();
        let section = document.querySelector(btnToScroll.getAttribute('href'));

        section = (section) ? section : 0;

        if(section) {
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


})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
/*
let slider = new Swiper('.__slider', {
  
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: false,

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
    
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }
}); 
*/
// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
