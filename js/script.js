// "use strictt";

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows() );
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {document.body.classList.add('_pc')};

// Плавный скролл
const menuLinks = document.querySelectorAll('.menu__link[data-goto]', '.footer__list_item[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		} 
	}
}
// Меню бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

function ibg(){ 

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) { 
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+') center center/contain no-repeat';
		}
	}
} 
ibg(); 

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(400 > scrolled){
        $(".header").css({"background": "#004281"})         
    }
    if (scrolled==0) {
    	$(".header").css({"background": "transparent"})
    }
    if (scrolled==0) {
    	$(".wrapper_02 .header").css({"background": "#004281"});
    }
    if (scrolled==0) {
    	$(".wrapper_03 .header").css({"background": "#004281"});
    }
}

//=======================================================================================
// Header-slider (Feedback)
$(document).ready(function() {
	$('.lake-feedback').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1200,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ;
			settings: {}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
}); 

// End header
//=======================================================================================
// Rooms-slider
$(document).ready(function() {
	$('.slider-rooms').slick({
		arrows: true,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 3,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1200,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 944,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 479.98,
			settings: { 
				slidesToShow: 1,
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		appendArrows:$('.rooms-arrows__arrows'),       /*Выводит стрелки в блок с заданным классом*/
		appendDots:$('.rooms-arrows__dots'),        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
});


$(document).ready(function() {
	$('.slider-feedback').slick({
		arrows: true,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 3,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1200,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются, а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 944,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 579.98,
			settings: { 
				slidesToShow: 1,
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		appendArrows:$('.feedback-arrows__arrows'),       /*Выводит стрелки в блок с заданным классом*/
		appendDots:$('.feedback-arrows__dots'),        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
});
// apartment__images
$(document).ready(function() {
	$('.apartment__images').slick({
		arrows: false,/*Показ стрелок*/
		dots: true,/*Показ точек*/
		adaptiveHeight: true,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: true,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		/*asNavFor: ".slider-big",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 1058,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 2,
				dots: false,
			}
		},{
			breakpoint: 730,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});

	$('.main-sliderImages__list').slick({
		arrows: false,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: true,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		asNavFor: ".sub-sliderImages__list",    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ;
			settings: {}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});

	$('.sub-sliderImages__list').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 4,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		asNavFor: ".main-sliderImages__list",    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 3,
			}
		},{
			breakpoint: 632,
			settings: {
				slidesToShow: 2,
			}
		},{
			// breakpoint: ,
			settings: {
				
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
	$('.another-content__list').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 3,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 300,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		/*asNavFor: ".",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 1162,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 521,
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ,
			settings: {
				
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		appendArrows:$('.another-content__title'),       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
}); 


// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

function drawShelves() {
    // здесь отрисовка канвы

    // здесь ajax запрос

    return false;
}
// Табы карты
$("#tab-maps__item_01").click(function(e) {
	$('.tab-maps__item').removeClass('active');
	$('#tab-maps__item_01').addClass('active');
	$('.tab-maps__block').removeClass('active');
	$('#tab_01').addClass('active');
})
$("#tab-maps__item_02").click(function(e) {
	$('.tab-maps__item').removeClass('active');
	$('#tab-maps__item_02').addClass('active');
	$('.tab-maps__block').removeClass('active');
	$('#tab_02').addClass('active');
})
$("#tab-maps__item_03").click(function(e) {
	$('.tab-maps__item').removeClass('active');
	$('#tab-maps__item_03').addClass('active');
	$('.tab-maps__block').removeClass('active');
	$('#tab_03').addClass('active');
})

/*$(".tab-maps__item").click(function(e) {
  // e.preventDefault();
  $(".tab-maps__item").removeClass('active');
  $(this).addClass('active');
})*/

$(document).ready(function() {
	$('.main-sliderImages__list').slick({
		arrows: false,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 1,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: true,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		asNavFor: ".sub-sliderImages__list",    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ;
			settings: {}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});

	$('.sub-sliderImages__list').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 4,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 1000,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		asNavFor: ".main-sliderImages__list",    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 768,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 3,
			}
		},{
			breakpoint: 632,
			settings: {
				slidesToShow: 2,
			}
		},{
			// breakpoint: ,
			settings: {
				
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		/*appendArrows:$('.content'),*/       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
	$('.another-content__list').slick({
		arrows: true,/*Показ стрелок*/
		dots: false,/*Показ точек*/
		adaptiveHeight: false,/*Автоматическая адаптивная высота слайда(false) Чтобы работал .slick-track{align-items:flex-start;}*/
		slidesToShow: 3,/*Кол-во слайдов на экране*/
		slidesToScroll: 1,/*Кол-во слайдов, которые будут пролистываться за 1 раз*/
		speed: 300,/*Скорость пролистывания слайдов(300ms)*/
		easing:'linear',/*Тип анимации при смена слайда (look at atanimation)*/
		infinite: true,/*Будет ли слайдер бесконечным (true) Появляется slick-disabled*/
		initialSlide: 0,/*Стартовый слайд (0)*/
		autoplay: false,/*Будет ли проигрываться слайдер автоматически (false)*/
		autoplaySpeed: 5000,/*Время автопроигрывания слада (3000)*/
		pauseOnFocus: true,/*Пауза при фокусе (true)*/
		pauseOnHover: true,/*Пауза при наведении (true)*/
		pauseOnDotsHover: true,/*Пауза при наведении на кнопки*/
		draggable: true,/*Будет ли работать свайп на ПК (true)*/
		swipe: true,/*Будет ли работать свайп на телефонах (true)*/
		touchThreshold: 20,/*Часть которя нужна для свайпа (5)*/
		touchMove: true,/*Будет ли тянуться слайдер (true)*/
		waitForAnimate: true,/*Будет ли слайдер блокировать множество свайпов (true)*/
		centerMode: false,/*Будет ли главный слайд по центру (false) Рекомендуется {text-align: center;}*/
		variableWidth: false,/*Контент сам задает ширину (false)*/
		rows: 1,/*Сколько рядов будет показываться за раз (1)*/
		slidesPerRow: 1,/*Количество слайдов в ряду (1)*/
		vertical: false,/* (false) Если flex, то .slick-track{display: block} | Рекомендуется задать высоту в html*/
		varticalSwiping: false,/*Будет ли слайдер свайпать вверх или вниз (false)*/
		fade: false,/* !Показывает только 1 картинку и слады не листаются а затемняются*/
		/*asNavFor: ".",*/    /*Связывает несколько слайдеров (При нажатии кнопки картинки меняются на этих слайдерах)*/
		responsive:[{
			breakpoint: 1162,/*Брейкпоинт, на котором можно изменить каие-либо значения*/
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 521,
			settings: {
				slidesToShow: 1,
			}
		},{
			// breakpoint: ,
			settings: {
				
			}
		}],

		// mobileFirst: false;
		// <img data-lazy="../img/" alt="">   Ленивая загрузка (html)
		appendArrows:$('.another-content__title'),       /*Выводит стрелки в блок с заданным классом*/
		/*appendDots:$('.content'), */        /*Выводит точки в блок с заданным классом*/
		/*min-width = 0; Добавить слайдеру и родителю flex-элементу*/
	});
});

 var $tabs = function tabs_01(target) {
  var
    _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove('tabs__link_active');
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove('tabs__pane_show');
      }
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('tabs__link_active');
      tabsPaneTarget.classList.add('tabs__pane_show');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('tabs__link')) {
      return;
    }
    // отменяем стандартное действие
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};
$tabs('.tabs'); 