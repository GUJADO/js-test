$('ul li').click(function(event) {
	console.log('ты нажал на элемент!');
	$('ul').append('<li>Доп. элемент</li>');
});

function addAndStop(e) {
	$('ul').append('<li>доп. элемент</li>');
	$('ul').off('click');
}

$('ul').on('click', 'li', addAndStop);