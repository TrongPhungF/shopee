$(document).ready(function() {



	jQuery.validator.setDefaults({
		errorElement: 'div',
		errorPlacement: function(error, element) {
			$($($(element.parent()[0]).parent()[0]).children()[1]).append(error)
		},
		highlight: function(element, errorClass, validClass) {
			$(element).addClass('EL8Hdg');
			$($(element).parent()[0]).addClass('eIvw9r');
			$($($(element).parent()[0]).children()[1]).css('display', 'none');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).removeClass('EL8Hdg');
			$($(element).parent()[0]).removeClass('eIvw9r');
			$($($(element).parent()[0]).children()[1]).css('display', 'block');
			
		}
	});

	$("#frm-login").validate({
		rules: {
			userName: {
				required: true,
			},
			password: {
				required: true,
			},
		}, messages: {
			userName: {
				required: "Vui lòng điền vào mục này.",
			},
			password: {
				required: "Vui lòng điền vào mục này.",
			}
		}
	})

	$("#frm-login").on('invalid-form.validate', function() {
		jQuery(this).data('form_is_invalid', true);
	});

	$('#frm-login').on('change blur keyup keydown', function() {

		if ($("#frm-login").valid()) {
			$('.btn-submit').prop('disabled', false);
		} else {
			$('.btn-submit').prop('disabled', 'disabled');
		}
	});


	$('#btn-show-password').on('click', function() {
		$('#btn-hide-password').css('display', 'block');
		$('#btn-show-password').css('display', 'none');
		$('#inp-pass').prop('type', 'text');
	})

	$('#btn-hide-password').on('click', function() {
		$('#btn-show-password').css('display', 'block');
		$('#btn-hide-password').css('display', 'none');
		$('#inp-pass').prop('type', 'password');
	})
});