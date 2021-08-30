$(document).ready(function(){
	$('h1.h1').css({'color':'red'});
/*
	//TOGGLE CSS CLASS
	$('.btn1').click(function(){
		$('.para1').toggleClass('myclass');
	});
	
	//ADD OR REMOVE CSS CLASS
	$('.btn1').click(function(){
		$('p').addClass('border');
	})

	$('.btn2').click(function(){
		$('p').removeClass('border');
	});

	//to add into html
	$('.method').html('<p>Hello Jquery</p>')

	alert($('.method').text());


	//APPEND AT BACK
	$('#addb').on('click', function() {

		$('ul').append('<li>Append list Item</li>');
	})	

	//APPEND AT FRENT
	$('#addf').on('click', function() {
		$('ul').prepend('<li>Prepend list Item</li>');
	})	

	//APPENDTO
	$('#append').click(function() {
		$('.para1').appendTo('.para2');
	})

	//PREPEND TO
	$('#prepend').click(function() {
		$('.parab2').prependTo('.parab1');
	})
	
	//BEFORE AND AFTER
	$('#beforeandafter').click(function() {
		$('ul').before('<h4>Before</h4>')
		$('ul').after('<h4>After</h4>')
	})

	//EMPTY() REMOVE ALL TAG AND CONTENTS INSIDE "UL"
	$('#empty').click(function() {
		$('ul').empty();
	})

	//DETACH() REMOVE ALL TAG AND CONTENTS INCLUDE "UL"
	$('#detach').click(function() {
		$('ul').detach();
	})

	*/
	//DOM manipulation add attributes
	/*
	$('a').attr('target', '_blank');
	

	alert($('a').attr('href'));
	

	//WRAP TAGS
	$('#wrap').on('click', function(){
		$('p').wrap('<h1>');
	})

	//WRAP ALL TAGS
	$('#wrapall').on('click', function(){
		$('p').wrapAll('<h1>');
	})
	*/
	//THIS ONE ADD ELEMENT TYPED INSIDE INPUT FORM
	$('#newItem').on('keyup', function(e){
		var code = e.which;

		if(code == 13){
			e.preventDefault();
			$('ul').append('<li>'+e.target.value+'</li>');
		}

	})

	//**********
	// ARRAY TRAVERSING

	var myarr = ['chethu', 'peethu', 'appe', 'pratham', 'ammi', 'manish', 'pranish'];

	$.each(myarr, function(index, value){
		$('.family').append('<li>'+value+'</li>');
	})
	
	//MAKE ARRAY FROM DOM ELEMWNTS
	var newArr = $('ul.list li').toArray();
	$.each(newArr, function(index, value) {
		console.log(value.innerHTML);
	})

});