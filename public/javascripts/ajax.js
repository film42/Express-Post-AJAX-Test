$(document).ready(function() {
	ajax('GET');
});

$('#form').submit(function(e) {
	e.preventDefault();
	ajax('POST', $('#vow').val());
	$('#vow').val('');
});

function ajax(method, data) {
	$.ajax({
		type: method,
		url: '/ajax',
		dataType: 'json',
		data: {vow: data},
		cache: false,
		timeout: 5000,
		success: function(data) {
			$('#test').html(''); // reset

			if(data.db.length == 0)
			$('#test').append('nothing yet, use the form.');

			else
			$.each(data.db, function(i, val) {
				var output = '<p>I vow to ' + val + '.</p>';
				$('#test').prepend(output);
			});
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$('#test').append('error ' + textStatus + " " + errorThrown);
		}
	});
}