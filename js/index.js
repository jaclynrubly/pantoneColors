 // source: https://www.pantone.com/

// ************ Variables ************
// Pantone Colors
var pantoneColors = {
	first: {
		hex: '#9DB8D3',
		swatch: '15-4020',
		colorName: 'Cerulean' },

	second: {
		hex: '#C54575',
		swatch: '17-2031',
		colorName: 'Fuschia Rose' },

	third: {
		hex: '#BD1D35',
		swatch: '19-1664',
		colorName: 'True Red' },

	fourth: {
		hex: '#7CC4C3',
		swatch: '14-4811',
		colorName: 'Aqua Sky' },

	fifth: {
		hex: '#E05844',
		swatch: '17-1456',
		colorName: 'Tigerlily' },

	sixth: {
		hex: '#58B0AE',
		swatch: '15-5217',
		colorName: 'Blue Turquoise' },

	seventh: {
		hex: '#DECCBF',
		swatch: '13-1106',
		colorName: 'Sand Dollar' },

	eighth: {
		hex: '#991F34',
		swatch: '19-1557',
		colorName: 'Chili Pepper' },

	ninth: {
		hex: '#5A5C9C',
		swatch: '18-3943',
		colorName: 'Blue Iris' },

	tenth: {
		hex: '#EFBF62',
		swatch: '14-0848',
		colorName: 'Mimosa' },

	eleventh: {
		hex: '#4AB5A9',
		swatch: '15-5519',
		colorName: 'Turquoise' },

	twelfth: {
		hex: '#D75171',
		swatch: '18-2120',
		colorName: 'Honeysuckle' },

	thirteenth: {
		hex: '#DA422D',
		swatch: '17-1463',
		colorName: 'Tangerine Tango' },

	fourteenth: {
		hex: '#149372',
		swatch: '17-5641',
		colorName: 'Emerald' },

	fifteenth: {
		hex: '#B165A3',
		swatch: '18-3224',
		colorName: 'Radiant Orchid' },

	sixteenth: {
		hex: '#975253',
		swatch: '18-1438',
		colorName: 'Marsala' },

	seventeenth: {
		hex1: '#F5CACA',
		hex2: '#92A9D1',
		swatch: '15-3919/13-1520',
		colorName: 'Serenity & Rose Quartz' },

	eighteenth: {
		hex: '#94B55D',
		swatch: '15-0343',
		colorName: 'Greenery' },

	ninteenth: {
		hex: '#604d8d',
		swatch: '18-3838',
		colorName: 'Ultra Violet' },

	twentieth: {
		hex: '#FA7268',
		swatch: '16-1546',
		colorName: 'Living Coral' } };


var slider = $(".range-slider"),
range = $(".range-slider__range"),
value = $(".range-slider__value");

// ************ Functions ************
var rangeSlider = function rangeSlider() {
	slider.each(function () {
		value.each(function () {
			var value = $(this).
			prev().
			attr("value");
			$(this).html(value);
		});
	});
	range.on("input", function () {
		$(this).
		next(value).
		html(this.value);
		pantoneColorBackgrounds();
	});
};
rangeSlider();
var pantoneColorBackgrounds = function pantoneColorBackgrounds() {
	if (value[0].innerHTML === '2000') {
		$('body').css('background', pantoneColors.first.hex);
		$('h3.swatch-number').text(pantoneColors.first.swatch);
		$('h3.color-name').text(pantoneColors.first.colorName);
	} else if (value[0].innerHTML === '2001') {
		$('body').css('background', pantoneColors.second.hex);
		$('h3.swatch-number').text(pantoneColors.second.swatch);
		$('h3.color-name').text(pantoneColors.second.colorName);
	} else if (value[0].innerHTML === '2002') {
		$('body').css('background', pantoneColors.third.hex);
		$('h3.swatch-number').text(pantoneColors.third.swatch);
		$('h3.color-name').text(pantoneColors.third.colorName);
	} else if (value[0].innerHTML === '2003') {
		$('body').css('background', pantoneColors.fourth.hex);
		$('h3.swatch-number').text(pantoneColors.fourth.swatch);
		$('h3.color-name').text(pantoneColors.fourth.colorName);
	} else if (value[0].innerHTML === '2004') {
		$('body').css('background', pantoneColors.fifth.hex);
		$('h3.swatch-number').text(pantoneColors.fifth.swatch);
		$('h3.color-name').text(pantoneColors.fifth.colorName);
	} else if (value[0].innerHTML === '2005') {
		$('body').css('background', pantoneColors.sixth.hex);
		$('h3.swatch-number').text(pantoneColors.sixth.swatch);
		$('h3.color-name').text(pantoneColors.sixth.colorName);
	} else if (value[0].innerHTML === '2006') {
		$('body').css('background', pantoneColors.seventh.hex);
		$('h3.swatch-number').text(pantoneColors.seventh.swatch);
		$('h3.color-name').text(pantoneColors.seventh.colorName);
	} else if (value[0].innerHTML === '2007') {
		$('body').css('background', pantoneColors.eighth.hex);
		$('h3.swatch-number').text(pantoneColors.eighth.swatch);
		$('h3.color-name').text(pantoneColors.eighth.colorName);
	} else if (value[0].innerHTML === '2008') {
		$('body').css('background', pantoneColors.ninth.hex);
		$('h3.swatch-number').text(pantoneColors.ninth.swatch);
		$('h3.color-name').text(pantoneColors.ninth.colorName);
	} else if (value[0].innerHTML === '2009') {
		$('body').css('background', pantoneColors.tenth.hex);
		$('h3.swatch-number').text(pantoneColors.tenth.swatch);
		$('h3.color-name').text(pantoneColors.tenth.colorName);
	} else if (value[0].innerHTML === '2010') {
		$('body').css('background', pantoneColors.eleventh.hex);
		$('h3.swatch-number').text(pantoneColors.eleventh.swatch);
		$('h3.color-name').text(pantoneColors.eleventh.colorName);
	} else if (value[0].innerHTML === '2011') {
		$('body').css('background', pantoneColors.twelfth.hex);
		$('h3.swatch-number').text(pantoneColors.twelfth.swatch);
		$('h3.color-name').text(pantoneColors.twelfth.colorName);
	} else if (value[0].innerHTML === '2012') {
		$('body').css('background', pantoneColors.thirteenth.hex);
		$('h3.swatch-number').text(pantoneColors.thirteenth.swatch);
		$('h3.color-name').text(pantoneColors.thirteenth.colorName);
	} else if (value[0].innerHTML === '2013') {
		$('body').css('background', pantoneColors.fourteenth.hex);
		$('h3.swatch-number').text(pantoneColors.fourteenth.swatch);
		$('h3.color-name').text(pantoneColors.fourteenth.colorName);
	} else if (value[0].innerHTML === '2014') {
		$('body').css('background', pantoneColors.fifteenth.hex);
		$('h3.swatch-number').text(pantoneColors.fifteenth.swatch);
		$('h3.color-name').text(pantoneColors.fifteenth.colorName);
	} else if (value[0].innerHTML === '2015') {
		$('body').css('background', pantoneColors.sixteenth.hex);
		$('h3.swatch-number').text(pantoneColors.sixteenth.swatch);
		$('h3.color-name').text(pantoneColors.sixteenth.colorName);
	} else if (value[0].innerHTML === '2016') {
		$('body').css('background', 'linear-gradient(-90deg, ' + pantoneColors.seventeenth.hex1 + ', ' + pantoneColors.seventeenth.hex2 + ')');
		$('h3.swatch-number').text(pantoneColors.seventeenth.swatch);
		$('h3.color-name').text(pantoneColors.seventeenth.colorName);
	} else if (value[0].innerHTML === '2017') {
		$('body').css('background', pantoneColors.eighteenth.hex);
		$('h3.swatch-number').text(pantoneColors.eighteenth.swatch);
		$('h3.color-name').text(pantoneColors.eighteenth.colorName);
	} else if (value[0].innerHTML === '2018') {
		$('body').css('background', pantoneColors.ninteenth.hex);
		$('h3.swatch-number').text(pantoneColors.ninteenth.swatch);
		$('h3.color-name').text(pantoneColors.ninteenth.colorName);
	} else if (value[0].innerHTML === '2019') {
		$('body').css('background', pantoneColors.twentieth.hex);
		$('h3.swatch-number').text(pantoneColors.twentieth.swatch);
		$('h3.color-name').text(pantoneColors.twentieth.colorName);
	}
};
var init = function init() {
	rangeSlider();
};

//document ready
$(function () {
	init();
});