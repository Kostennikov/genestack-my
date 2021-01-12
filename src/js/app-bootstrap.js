// карусель на bootstrap
$(document).ready(function () {
	// $('.main-info__links').slick({
	// 	arrows: false,
	// 	dots: false,
	// 	slidesToShow: 5,
	// 	focusOnSelect: true,
	// 	mobileFirst: true,
	// 	infinite: false
	// })

	$('.demo__items').slick({
		asNavFor: '.demo-images',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,

	});

	$('.demo-images').slick({
		asNavFor: '.demo__items',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: false,
		arrows: false,
		infinite: false,
		draggable: false,
	});

	$('.slider').slick({
		asNavFor: '.wrapper__links',
		slidesToShow: 2.4,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots: false,
		// mobileFirst: true,
		// centerMode: true,
		focusOnSelect: true,

		responsive: [
			{
				breakpoint: 1920,
				settings: {
					slidesToShow: 1.9,
					slidesToScroll: 1,
					arrows: true,
					dots: true,
				}
			},
			{
				breakpoint: 1260,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
					dots: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1.05,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.wrapper__links').slick({
		asNavFor: '.slider',
		infinite: false,
		arrows: false,
		dots: false,
		variableWidth: true,
		// slidesToShow: 5,
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
		// mobileFirst: true,
		responsive: [
			{
				breakpoint: 1260,
				settings: "unslick"
			},
		]

	});


	$('.questions__links').slick({
		asNavFor: '.questions-block',
		variableWidth: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		draggable: false,
		// mobileFirst: true,

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					asNavFor: '.questions-block',
				}
			}
		]

	});

	$('.questions-block').slick({
		asNavFor: '.questions__links',
		// slidesToShow: 4,
		// slidesToScroll: 1,
		arrows: false,
		draggable: false,
		infinite: false,
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 4,
		// 			slidesToScroll: 1,
		//
		// 		}
		// 	}
		// ]
	});
});
