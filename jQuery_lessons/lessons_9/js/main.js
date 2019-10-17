$(function() {
	$('p').text('DOM элементы загружены')
});

$(window).load(function() {	
});

$(window).unload(function() {
	alert('пользователь пока !! ')
})

$(window).resize(function(event) {
	console.log('размер окна изменен!')
});

$(window).scroll(function(event) {
	console.log('страница прокручена!')
});