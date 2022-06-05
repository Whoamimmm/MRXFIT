$('.container__slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


//document.querySelectorAll('.accordion-item__trigger').forEach((item)=>
//item.addEventListener('click', () => {
//   const parent = item.parentNode;
//  if(parent.classList.contains('accordion-item--active')){
//      parent.classList.remove('accordion-item--active');
//  } else{
//document
//.querySelectorAll('.accordion-item')
//.forEach((child) => child.classList.remove('accordion-item--active'))
//  parent.classList.add('accordion-item--active')
//  }
//})
//)

$(document).ready(function () {
    $('.accordion-item__trigger').click(function (event) {
    if ($('.container__accordion').hasClass('one')) {
          $('.accordion-item__trigger').not($(this)).removeClass('active');
          $('.accordion-item__content').not($(this).next()).slideUp(200);
       }
      $(this).toggleClass('active').next().slideToggle(200)
   });
});
//const popupLinks = document.querySelectorAll('.popup.link');
//const body = document.querySelector('body');
//const lockPadding = document.querySelectorAll('.lock-padding');


//let unlock = true;



//const timeout = 800;



//if (popupLinks.length > 0) {
 //   for (let index = 0; index < popupLinks.length; index++) {
  //      const popupLink = popupLinks[index];
   //     popupLink.addEventListener('click', function (e) {
   //         const popupName = popupLink.getAttribute('href').replace('#', '');
   //         const curentPopup = document.getElementById(popupName);
    //        popupOpen(curentPopup);
    //        e.preventDefault();
    //    });
   // }
//}

//const popupCloseIcon = document.querySelectorAll('.close-popup');
//if (popupCloseIcon.length > 0) {
 //   for (let index = 0; index < popupCloseIcon.length; index++) {
 //       const el = popupCloseIcon[index];
   //     el.addEventListener('click', function (e) {
   //         popupClose(el.closest('.popup'));
    //        e.preventDefault();
    //    });

  //  }
//}
//function popupOpen(curentPopup) {
  //  if (curentPopup && unlock) {
   //     const popupActive = document.querySelector('.popup.open');
   //     if (popupActive) {
    //        popupClose(popupActive, false);
    //    } else {
    //        bodyLock()
    //    }
     //   curentPopup.classList.add('open');
    //    curentPopup.addEventListener('click', function (e) {
     //       if (!e.target.closest('.popup__content')) {
     //           popupClose(e.target.closest('.popup'));
     //       }
     //   });
  //  }
//}
//function popupClose(popupActive, doUnlock = true) {
 //   if (unlock) {
  //      popupActive.classList.remove('.open');
  //      if (doUnlock) {
   //         bodyUnLock();
   //     }
   // }
//}

$('.open-popup').click(function(e){
    e.preventDefault();
    $('.popup-one').fadeIn(600);

});
$('.close-popup').click(function () {
    $('.popup-one').fadeOut(600);
});

$('.open-popup-2').click(function (e) {
    e.preventDefault();
    $('.popup-two').fadeIn(600);

});
$('.close-popup-2').click(function () {
    $('.popup-two').fadeOut(600);
});



$('.open-popup-3').click(function (e) {
    e.preventDefault();
    $('.popup-three').fadeIn(600);

});
$('.close-popup-3').click(function () {
    $('.popup-three').fadeOut(600);
});