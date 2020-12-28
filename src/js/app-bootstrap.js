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
		focusOnSelect: true
	});

	$('.demo-images').slick({
		asNavFor: '.demo__items',
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		dots: false,
		arrows: false,
		infinite: false,
		draggable: false

	});

	$('.slider').slick({
		asNavFor: '.wrapper__links',
		// slidesToScroll: 1,
		infinite: false,
		arrows: true,
		dots: true,
		centerMode: true,
		// focusOnSelect: true

		responsive: [
			{
				breakpoint: 4000,
				settings: {
					// slidesToShow: 2,
					dots: false,
				}
			},
			{
				breakpoint: 1259,
				settings: {
					// slidesToShow: 2,
					// dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					// slidesToShow: 1,
					arrows: false
				}
			},
		]
	});

	$('.wrapper__links').slick({
		asNavFor: '.slider',
		infinite: false,
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
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		draggable: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.questions-block'
				}
			}
		]

	});

	$('.questions-block').slick({
		asNavFor: '.questions__links',
		slidesToShow: 1,
		arrows: false,
		draggable: false
	});
});
