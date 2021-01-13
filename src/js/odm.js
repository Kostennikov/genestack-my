//Page ODM
//page-2
const header = document.querySelector('.header'),
	headerMod = document.querySelector('.header-mod'),
	logo = document.querySelector('.top-line__logo'),
	line = document.querySelectorAll('.line'),
	toggle = document.querySelector('.checkbox'),
	nav = document.querySelector('.top-line__nav'),
	page = document.querySelector('.page'),
	links = document.querySelector('.top-line__links');

toggle.addEventListener('click', () => {
	links.classList.toggle('toggle-active-footer');
	nav.classList.toggle('toggle-active');
	page.classList.toggle('page-hidden');
});

//добавляем галочку в выпадающем списке
const navItem = document.querySelectorAll('.nav__item');
const dropDown = document.querySelector('.dropdown');
const navList = document.querySelector('.nav__list');

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

navItem.forEach(function (navItem) {
	if (navItem.querySelector('.dropdown')) {
		navItem.classList.add('nav__item-arrow');
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



//дублируем блок с ячейками в секции landscapes, для полного заполнения экрана
const mediaQuery = window.matchMedia('max-width: 768px');
if (mediaQuery.matches) {
	document.querySelector('.cells-container').appendChild(document.querySelector('.cells').cloneNode(true));
}

//анимация блока circle

const circleConstructor = document.querySelectorAll('.circle-constructor');
const circleLite = document.querySelector('.circle-lite');
const circlePath = document.querySelectorAll('.circle-constructor__lite-path');
let circleLines = document.querySelectorAll('.circle-constructor__line');
let circle = document.querySelector('.circle-items');
let dataLine = document.querySelectorAll('[data-line]');
let dataActive = document.querySelector('[data-active]');
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
				dataActive.classList.add('constructor-active');
				dataLine.forEach((dataLine) => {
					dataLine.classList.add('circle-line__load');
				});
			}, 700);
		}

	});
};
const observer = new IntersectionObserver(loadCircle, options);

observer.observe(circle);

(function () {
	circle.addEventListener('click', (event) => {

		circleConstructor.forEach((circleConstructor) => {
			let target = circleConstructor.getAttribute('data-target');
			let num = circleConstructor.getAttribute('data-num');
			circleConstructor.classList.remove('constructor-active');
			let circlePart = event.target.closest('.circle-constructor');

			circlePart.classList.add('constructor-active');

			showDemo(target, num);
			// let trigger = event.target.closest('.circle-constructor__line');
			// if (target || trigger) {
			// 	targetArc(event);
			// 	// targetLine(event);
			// }
			return
		});

	});
})();

function showDemo(target, num) {
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

// function showDemo(target, num) {
// 	console.log(circleItem.target, circleItem.num);
// 	circleItem.target = target;
// 	circleItem.num = num;
// }

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
