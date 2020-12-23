//закрепляем header

const header = document.querySelector('.header'),
	headerMod = document.querySelector('.header-mod'),
	logo = document.querySelector('.top-line__logo'),
	line = document.querySelectorAll('.line'),
	toggle = document.querySelector('.menu-toggle'),
	nav = document.querySelector('.top-line__nav'),
	page = document.querySelector('.page'),
	links = document.querySelector('.top-line__links');

const navItem = document.querySelectorAll('.nav__item');
const dropDown = document.querySelector('.dropdown');
const navList = document.querySelector('.nav__list');

// let scrollPosition = window.scrollY;

// window.addEventListener('scroll', () => {
// 	scrollPosition = window.scrollY;
// });

// function scroll(scrollPosition) {
// 	let toggleActive = document.querySelector('.toggle-active');
// 	scrollPosition = window.scrollY;
// 	let topPos = header.offsetTop;
// 	window.requestAnimationFrame(scroll);
// 	if (scrollPosition > topPos) {
// 		header.classList.add('header-mod');
// 		logo.classList.add('logo-mod');
//
// 	} else if (scrollPosition <= topPos && !toggleActive) {
// 		header.classList.remove('header-mod');
// 		logo.classList.remove('logo-mod');
//
// 	}
// 	line.forEach((line) => {
// 		if (scrollPosition > topPos || toggleActive) {
//
// 			line.classList.add('line-mod');
// 		} else {
//
// 			line.classList.remove('line-mod');
// 		}
// 	});
// 	navItem.forEach(function (navItem) {
// 		if (navItem.querySelector('.dropdown')) {
// 			navItem.classList.add('nav__item-arrow');
// 			if (scrollPosition > topPos) {
// 				navItem.classList.add('arrow-gray');
// 			} else {
// 				navItem.classList.remove('arrow-gray');
//
// 			}
// 		}
//
// 	});
//
// 	window.requestAnimationFrame(scroll);
//
// }

toggle.addEventListener('click', () => {
	nav.classList.toggle('toggle-active');
	page.classList.toggle('page-hidden');
	if (header) {
		header.classList.add('header-mod');
		logo.classList.add('logo-mod');
		links.classList.toggle('toggle-active-footer');
	}

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
	videoItem = document.querySelector('.video-content__img'),
	popupContent = document.querySelector('.popup-content');

videoItem.addEventListener('click', function (event) {
	const element = event.target.closest('.video-content__img');
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
popup.addEventListener('click', function () {
	if (popupContent) {
		popup.style.display = 'none';
		popup.querySelector('.video__file').remove();
		page.classList.remove('page-hidden');
	}
});

const demoItems = document.querySelector('.demo__items');
const demoItem = document.querySelectorAll('.demo__item');
const demoContent = document.querySelectorAll('.demo__content');

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

	// let ggg = footerHead.childNodes.length;
	// console.log(footerHead);
	// console.log(ggg);

	footerHead.classList.add('item-active');

	// }
});








