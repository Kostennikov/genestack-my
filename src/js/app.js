//закрепляем header

const header = document.querySelector('.header'),
	logo = document.querySelector('.top-line__logo'),
	line = document.querySelectorAll('.line'),
	toggle = document.querySelector('.menu-toggle'),
	nav = document.querySelector('.top-line__nav'),
	page = document.querySelector('.page'),
	links = document.querySelector('.top-line__links');

const navItem = document.querySelectorAll('.nav__item');
const dropDown = document.querySelector('.dropdown');
const navList = document.querySelector('.nav__list');

let scrollPosition = window.scrollY;
let topPos = header.offsetTop;

window.addEventListener('scroll', () => {
	scrollPosition = window.scrollY;

});

function scroll(scrollPosition) {
	let toggleActive = document.querySelector('.toggle-active');
	scrollPosition = window.scrollY;
	window.requestAnimationFrame(scroll);
	if (scrollPosition > topPos) {
		header.classList.add('header-mod');
		logo.classList.add('logo-mod');

	} else if (scrollPosition <= topPos && !toggleActive) {
		header.classList.remove('header-mod');
		logo.classList.remove('logo-mod');

	}
	line.forEach((line) => {
		if (scrollPosition > topPos || toggleActive) {

			line.classList.add('line-mod');
		} else {

			line.classList.remove('line-mod');
		}
	});
	navItem.forEach(function (navItem) {
		if (navItem.querySelector('.dropdown')) {
			navItem.classList.add('nav__item-arrow');
			if (scrollPosition > topPos) {
				navItem.classList.add('arrow-gray');
			} else {
				navItem.classList.remove('arrow-gray');

			}
		}

	});
}

window.requestAnimationFrame(scroll);

toggle.addEventListener('click', () => {
	nav.classList.toggle('toggle-active');
	page.classList.toggle('page-hidden');
	header.classList.add('header-mod');
	logo.classList.add('logo-mod');
	links.classList.toggle('toggle-active-footer');
});

//добавляем галочку в выпадающем списке

navList.addEventListener('click', (event) => {

	let navItem = event.target.closest('.nav__item');
	console.log('navItem:', navItem);
	let elem = navItem.querySelector('.dropdown');
	let dropItem = event.target;
	if (!dropDown) return;
	console.log('dropItem:', dropItem);

	if (navItem.classList.contains('arrow-rotate') && dropItem === navItem) {
		elem.classList.remove('dropdown-active');
		navItem.classList.remove('arrow-rotate');

	} else {
		elem.classList.add('dropdown-active');
		navItem.classList.add('arrow-rotate');
	}

});

// POP-UP
const videoBtn = document.querySelector('.video-content__img-button'),
	popup = document.querySelector('.popup'),
	popupClose = document.querySelector('.popup-close'),
	popupContent = document.querySelector('.popup-content');

videoBtn.addEventListener('click', function (event) {
	const element = event.target.closest('.video-content__img-button');
	console.log('element:', element);
	popup.style.display = 'block';
	page.classList.add('page-hidden');
	if (element) {
		// добавляем iframe
		popupContent.insertAdjacentHTML('afterbegin', ' <iframe class="video__file" width="100%" height="100%"\n' +
			'                                data-src="https://www.youtube.com/embed/5hOKmkODrp0" frameborder="0"\n' +
			'                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
			'                                allowfullscreen></iframe>');

		const videoFile = document.querySelector('.video__file');
		const link = videoFile.dataset.src;
		videoFile.setAttribute('src', link);
		// videoFile.removeAttribute('data-src')
	}
});
// удаляем pop-up и iframe
popup.addEventListener('click', function (event) {
	if (popupContent) {
		console.log('privet');
		popup.style.display = 'none';
		popup.querySelector('.video__file').remove();
		page.classList.remove('page-hidden');
	}
});

// карусель на bootstrap
$(document).ready(function () {

	$('.demo__items').slick({
		asNavFor: '.demo-images',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true
	});

	$('.demo-images').slick({
		// asNavFor: '.demo__items',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: false,
		arrows: false,
		infinite: false,
		draggable: false
	});

	$('.slider').slick({
		arrows: true,
		dots: true,
		// slidesToShow: 2,
		// slidesToScroll: 1,
		// centerMode: true,
		// infinite: false,
		// initialSlide: 1,
		// autoplay: true,
		// autoplaySpeed: 5000,
		focusOnSelect: true,
		asNavFor: '.wrapper__links',

		responsive: [
			{
				breakpoint: 4000,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,

				}
			},
			// {
			// 	breakpoint: 480,
			// 	settings: {
			// 		slidesToShow: 1,
			//
			// 	}
			// }

		]
	});

	$('.wrapper__links').slick({
		asNavFor: '.slider',
		arrows: false,
		dots: false,
		slidesToShow: 5,
		focusOnSelect: true,


	});

	//page Catalog
	$('.slider-container').slick({
		// asNavFor: '.catalogue-images',
		// slidesToShow: 1,
		// slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
		// centerMode: true,
		// focusOnSelect: true
		infinite: false,
		draggable: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: false,

				}
			}
		]
	});

	$('.questions__links').slick({
		asNavFor: '.questions-block',
		slidesToShow: 4,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		draggable: false,

	});

	$('.questions-block').slick({
		// asNavFor: '.questions__links',
		slidesToShow: 1,
		arrows: false,
		draggable: false
	});
});

//
const demoItems = document.querySelector('.demo__items');
const demoItem = document.querySelectorAll('.demo__item');
const demoContent = document.querySelectorAll('.demo__content');

let demo = function (){
	demoItems.addEventListener('click', function (event) {
		event.preventDefault();
		let target = event.target.closest('.demo__item');
		if (!target) return;
		demoItem.forEach(function (event) {
			event.classList.remove('demo-active');
			target.classList.add('demo-active');
		});
		demoContent.forEach(function (demoContent) {
			demoContent.classList.remove('demo-show');
			target.querySelector('.demo__content').classList.add('demo-show');
		});
	});
}


const footerHead = document.querySelectorAll('.footer-content__list-head');
const footerRow = document.querySelector('.footer-row');
footerRow.addEventListener('click', (event) => {
	event.preventDefault();
	let trigger = event.target.closest('.footer-content__list');
	if (!trigger) return;
	console.log(trigger);
	let element = trigger.querySelectorAll('.footer-content__list-item');

	let elemClose = event.target.closest('.footer-content__list-head');

	elemClose.classList.toggle('item-deactive');

	element.forEach(function (element) {
		if (element.classList.contains('item-show') && elemClose) {
			element.classList.remove('item-show');

		} else {
			element.classList.add('item-show');

		}
	});

});

footerHead.forEach((footerHead) => {
	// if (footerList.childNodes.length > 3){

	let ggg = footerHead.childNodes.length;
	// console.log(footerHead);
	// console.log(ggg);

	footerHead.classList.add('item-active');

	// }
});


//Page Catalog
//page-2

const circleConstructor = document.querySelectorAll('.circle-constructor');
const circleLite = document.querySelector('.circle-lite');
const circlePath = document.querySelectorAll('.circle-constructor__lite-path');
let circleLines = document.querySelectorAll('.circle-constructor__line');
let circle = document.querySelector('.circle-items');
let dataLine = document.querySelectorAll('[data-line]')
let dataActive = document.querySelector('[data-active]')
// let target = document.querySelector('.circle-items');

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.7
};

let loadCircle = function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting && entry.target.classList.contains('circle-items')) {
			entry.target.classList.add('items-active');
			console.log('элемент в области наблюдения');
			setTimeout(() => {
				dataActive.classList.add('constructor-active')
				dataLine.forEach((dataLine) => {
					dataLine.classList.add('circle-line__load');
				});
			}, 700);
		}

	});
};
const observer = new IntersectionObserver(loadCircle, options);

observer.observe(circle, circleLines);

circle.addEventListener('click', (event) => {

	circleConstructor.forEach((circleConstructor) =>{
		let target = circleConstructor.getAttribute('data-target')
		let num = circleConstructor.getAttribute('data-num')
		circleConstructor.classList.remove('constructor-active');
		let circlePart = event.target.closest('.circle-constructor');


		circlePart.classList.add('constructor-active');

		showDemo(target, num)
		// let trigger = event.target.closest('.circle-constructor__line');
		// if (target || trigger) {
		// 	targetArc(event);
		// 	// targetLine(event);
		// }
	})

});
function showDemo(target, num){
	console.log(circleItem.target, circleItem.num);
	circleItem.target = target;
	circleItem.num = num;
}



const circleItems = document.querySelector('.circle-demo__items');
const circleItem = document.querySelectorAll('.circle-demo__item');

const circleContent = document.querySelectorAll('.circle-demo__content');

circleItems.addEventListener('click', function (event) {
	event.preventDefault();
	let target = event.target.closest('.circle-demo__item');
	if (!target) return;
	circleItem.forEach(function (event) {
		event.classList.remove('circle-demo__active');
		target.classList.add('circle-demo__active');
	});
	circleContent.forEach(function (circleContent) {
		circleContent.classList.remove('circle-demo__show');
		target.querySelector('.circle-demo__content').classList.add('circle-demo__show');
	});
});

const questionsBlock = document.querySelector('.questions-block');
const questionsList = document.querySelectorAll('.questions__list');
const questionsTitle = document.querySelectorAll('.questions__list-title');
const questionsContent = document.querySelector('.questions__list-content');

questionsList.forEach((questionsBlock) => {

	questionsTitle.forEach((questionsTitle) => {
		questionsTitle.classList.add('questions__list-plus');
	});

	questionsBlock.addEventListener('click', (event) => {
		event.preventDefault();
		let listTitle = event.target.closest('.questions__list-title');
		if (!listTitle) return;
		let elem = listTitle.querySelectorAll('.questions__list-content');
		listTitle.classList.toggle('questions__list-disable');

		elem.forEach((elem) => {
			elem.classList.toggle('questions__list-show');
			console.log(questionsContent);
		});
	});
});
