import * as flsFunctions from "./modules/functions.js";
import * as j from "./modules/jquery.min.js";
import * as s from "./modules/slick.js";
import * as m from "./modules/jquery.magnific-popup.js";



// import * as flsFunctions from "./modules/delay.js";

flsFunctions.isWebp();
j.jQuery();
s.sclick();
m.magnificPopup();



// core version + navigation, pagination modules:
import Swiper, {
	Navigation,
	Pagination
} from 'swiper';

// init Swiper:
const swiper = new Swiper();


$(function () {
	$('.event-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 19000,
				settings: "unslick"
			},
			{
				breakpoint: 768,
				setting: {
					settings: "slick",
					speed: 300,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
});




$(document).ready(function () {

	$('.gallery__slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});


	$('.gallery__slider-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		// image: {
		// 	verticalFit: true,
		// 	titleSrc: function(item) {
		// 		return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
		// 	}
		// },
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});

});
/**для кнопок в секции Form  */
const formBtn = document.querySelectorAll('.form__place');

formBtn.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		formBtn.forEach((item) => {
			item.classList.remove('active')
		})

		item.classList.add('active')
	})
})
// document.querySelector('.form__place')
/************************************************* */


// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================



// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
export let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
export let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll("[data-lp]");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
export function menuInit() {
	let iconMenu = document.querySelector(".icon-menu");
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle("drop-down--open");
			}
		});
	};
}
export function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("drop-down--open");
}
export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("drop-down--open");
}

menuInit();