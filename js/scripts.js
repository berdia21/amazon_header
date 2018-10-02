$(document).ready(function(){
	$('.search_input').focusin(function(){
		$('.search_form').css("border", "1px solid #febd69");

	});
	$('.search_input').focusout(function(){
		$('.search_form').css("border", "1px solid transparent");

	});

	$('.have_children').hover(function(){
		$('.dark_overlay').fadeToggle('fast');
	});

	$('.language').hover(function(){
		$('.dark_overlay').fadeToggle('fast');
	});

	$('.sign_in').hover(function(){
		$('.dark_overlay').fadeToggle('fast');
	});


	$('.choose_lang a').click(function(){
		$('.choose_lang a').removeClass('active_lang');
		$(this).addClass('active_lang');
	});


	$('.nav_burger').click(function(){
		$('.nav_wrapper').slideToggle();
	});

});

function ValidateEmail(inputText)
{
var mailformat = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/;
if(inputText.value.match(mailformat))
{
document.sign_in_form.email.focus();
return true;
}
else
{
alert("You have entered an invalid Email Address!");
document.sign_in_form.email.focus();
return false;
}
}