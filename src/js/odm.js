//Page ODM
//page-2
//дублируем блок с ячейками в секции landscapes, для полного заполнения экрана
const mediaQuery = window.matchMedia('max-width: 768px');
if (mediaQuery.matches) {
	document.querySelector('.cells-container').appendChild(document.querySelector('.cells').cloneNode(true));
}

const circleConstructor = document.querySelectorAll('.circle-constructor');
const circleLite = document.querySelector('.circle-lite');
const circlePath = document.querySelectorAll('.circle-constructor__lite-path');
let circleLines = document.querySelectorAll('.circle-constructor__line');
let circle = document.querySelector('.circle-items');
let dataLine = document.querySelectorAll('[data-line]');
let dataActive = document.querySelector('[data-active]');

circleConstructor && loadCircle;
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
	});

});

// function showDemo(target, num) {
// 	console.log(circleItem.target, circleItem.num);
// 	circleItem.target = target;
// 	circleItem.num = num;
// }

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

