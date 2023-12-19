$(function(){
  
 $('.header__burger-wrapper').on('click', function(){ 
  $('.burger__content').toggleClass('on');

  $('.top').toggleClass('off');
  $('.main').toggleClass('off');
  $('.footer').toggleClass('off');
  $('.header__burger').toggleClass('header__burger--active');
});

$('.header__btn').on('click', function(){ 
  $('.entrance--code').toggleClass('on');
  $('.header').toggleClass('off');
  $('.main').toggleClass('off');
  $('.footer').toggleClass('off');
});

$('.header__btn--mini').on('click', function(){ 
  $('.entrance--code').toggleClass('on');
  $('.header').toggleClass('off');
  $('.main').toggleClass('off');
  $('.footer').toggleClass('off');
});

$('.entrance__link--password').on('click', function(){ 
  $('.entrance--code').removeClass('on');
  $('.entrance--password').toggleClass('on');
});
$('.entrance__link--code').on('click', function(){
  $('.entrance--password').removeClass('on'); 
  $('.entrance--code').toggleClass('on');
});

$('.entrance__close').on('click', function(){ 
  $('.entrance').removeClass('on');
  $('.header').removeClass('off');
  $('.main').removeClass('off');
  $('.footer').removeClass('off');
});



$('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
    $('.password-control').toggleClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});


// полифил для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach){
  NodeList.prototype.forEach = function (callback, thisArg){
    thisArg = thisArg || window;
    for (var i = 0; i <this.length; i++){
      callback.call(thisArg, this[i], i, this);
    };
  };
};

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

        const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
        const dropDownArr = dropDownWrapper.querySelector('.dropdown-arr');

        // клик по кнопке - открыть/закрыть select
          dropDownBtn.addEventListener('click', function(){

          dropDownBtn.classList.toggle('advantage');
          dropDownList.classList.toggle('on-flex');
          dropDownArr.classList.toggle('advantage');
          dropDownArr.classList.toggle('rotate');
        })

        dropDownListItems.forEach(function(listItem){
          listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownInput.value = this.dataset.value;

            dropDownBtn.classList.remove('advantage');
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('advantage');
            dropDownArr.classList.remove('rotate');
          });
        });

        // клик вне дропдауна - закрвть дропдаун
        document.addEventListener('click', function(e){
          if(e.target !== dropDownBtn){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate');
          }
        });

        document.addEventListener('keydown', function(e) {
          if(e.key === 'Tab' || e.key ==='Escape'){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate');
          }
        });
});


$('.slick__inner').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-arr slick-arr--right"><img src="images/icons/arr-right.svg"></button>',
  prevArrow: '<button type="button" class="slick-arr slick-arr--left"><img src="images/icons/arr-left.svg"></button>',
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 380,
      settings: "unslick"
    },
  ]
})


$('.types__inner').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  dots: false,
  infinite: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-arr slick-arr--right"><img src="images/icons/arr-right.svg"></button>',
  prevArrow: '<button type="button" class="slick-arr slick-arr--left"><img src="images/icons/arr-left.svg"></button>',
  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
  ]
})








$('.pagination__item').on('click', function(){ 
  $('.pagination__item--active').removeClass('pagination__item--active');
  $(this).removeClass('pagination__item--active');
  $(this).toggleClass('pagination__item--active');

  $('.pagination-prev').removeClass('pagination-arr--disabled');
  $('.pagination-next').removeClass('pagination-arr--disabled');
});

$('.pagination__item--start').on('click', function(){ 
  $('.pagination-prev').addClass('pagination-arr--disabled');
  $('.pagination-next').removeClass('pagination-arr--disabled');
});
$('.pagination__item--end').on('click', function(){ 
  $('.pagination-next').addClass('pagination-arr--disabled');
});



$(document).ready(function(){
  let settingsSlick = {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
      }
      let settingsSlickSmoll = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
    }

  if (document.documentElement.clientWidth < 730) {
      $('.top__baners').slick(settingsSlickSmoll);
  } 

  if (document.documentElement.clientWidth < 440) {
    $('.top__baners').slick(settingsSlickSmoll);
  } 

  window.onresize = function() {
      if (document.documentElement.clientWidth < 730) {
          if(!$(".top__baners").hasClass("slick-initialized")) $('.top__baners').slick(settingsSlick);
      } else {
          if ($(".top__baners").hasClass("slick-initialized")) $(".top__baners").slick("unslick");
      }
  }
  window.onresize = function() {
    if (document.documentElement.clientWidth < 440) {
        if(!$(".top__baners").hasClass("slick-initialized")) $('.top__baners').slick(settingsSlickSmoll);
    } else {
        if ($(".top__baners").hasClass("slick-initialized")) $(".top__baners").slick("unslick");
    }
}
});

$('.see-more__inner').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  dots: false,
  infinite: false,
  arrows: true,
  nextArrow: '<button type="button" class="slick-arr slick-arr--right"><img src="images/icons/arr-right.svg"></button>',
  prevArrow: '<button type="button" class="slick-arr slick-arr--left"><img src="images/icons/arr-left.svg"></button>',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: false,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: "unslick"
    },
    {
      breakpoint: 1300,
      settings: "unslick"
    },
  ]
})



// $('.more-btn').on('click', function(){ 
//   $('.slider__item').addClass('on');
//   $('.more-btn').addClass('off');
// });

$('.see-more__more').on('click', function(){ 
  $('.slider__item').addClass('on');
  $('.see-more__more').addClass('off');
});

$('.recommendation-more').on('click', function(){ 
  $('.slider__item-recommendation').addClass('on');
  $('.recommendation-more').addClass('off');
});

$('.children-holidays-more').on('click', function(){ 
  $('.slider__item-children-holidays').addClass('on');
  $('.children-holidays-more').addClass('off');
});

$('.photo-studios-more').on('click', function(){ 
  $('.slider__item-photo-studios').addClass('on');
  $('.photo-studios-more').addClass('off');
});
$('.platforms-more').on('click', function(){ 
  $('.slider__item-platforms').addClass('on');
  $('.platforms-more').addClass('off');
});











// $(document).ready(function(){
//   let settingsSlick = {
//           dots: false,
//           arrows: false,
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           centerMode: true,
//           infinite: true,
//       }

//   if (document.documentElement.clientWidth < 560) {
//       $('.card__parameters').slick(settingsSlick);
//   } 
//   window.onresize = function() {
//     if (document.documentElement.clientWidth < 560) {
//         if(!$(".card__parameters").hasClass("slick-initialized")) $('.card__parameters').slick(settingsSlick);
//     } else {
//         if ($(".card__parameters").hasClass("slick-initialized")) $(".card__parameters").slick("unslick");
//     }
// }
// });

$('.card__parameters').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  dots: false,
  infinite: true,
  arrows: false,
  nextArrow: '<button type="button" class="slick-arr slick-arr--right"><img src="images/icons/arr-right.svg"></button>',
  prevArrow: '<button type="button" class="slick-arr slick-arr--left"><img src="images/icons/arr-left.svg"></button>',
  responsive: [
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: true,
        arrows: false,
      }
    },
    
    {
      breakpoint: 1400,
      settings: "unslick"
    },
  ]
})


});





