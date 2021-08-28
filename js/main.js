$(document).ready(function(){
	//__________________________________________________________
   //EVENTS IN JQUERY
   /*
   $('#btn1').click(function(){
	   alert('Button 1 clicked')
   });
    
	//#SYNTAX ONE
	
   $("#btn2").on('click', function(){
	   
	   alert('Button 2 clicked')
   });
   
   //#SYNTAX TWO #MORE PREFARABLE TYPE OF SYNTAX
   
   $('#btn1').on('click', function()  {
	  $('.para h4,p,h3,ol').css('color','red ');
   });
   
   //#CLICK EVENTS
   
   $('#btn2').on('click', function()  {
	  $('.para').hide();
   });
   
   
   $('#btn1').on('click', function(){
	  $('.para').show();
   });
   
   $('#btn2').on('click', function()  {
	  $('.para').toggle();
   });
   
   
   
   //#DOUBLE CLICK EVENTS
   
   $("#btn1,#btn2").on('dblclick', function(){
	  $('.para').toggle();
   });
   
   
   //#HOVER EVENTS 
   //"NOTE" THIS EVENT IS NOT ACTUALY A JS EVENTS IT WON'T WORK IN SYNTAX 2
   //AND THIS ONE IS COMBINATION OF "mouseenter" AND "mouseleave" EVENTS
   
   $('#btn1,#btn2').hover(function(){
	  $('.para').toggle(); 
   });
   
   
   //#MOUSEENTER AND MOUSELEAVE
	$('#btn2').on('mouseenter', function(){
		$('.para').hide();
	})
	
	$('#btn2').on('mouseleave', function(){
		$('.para').show();
	})
   
   
   //#MOUSEDOWN AND MOUSEUP
   $('#btn1').on('mousedown', function(){
	  $('.para').toggle(); 
   });
   $('#btn1').on('mouseup', function(){
	  $('.para').toggle(); 
   });
   
  
   
   //ACCESING EVENT OBJECT IN CLICK EVENT
   
   //NOTE """ THERE MORE YOU CAN EXPORE FROM THESE (e) objects """
   
   
   $('#btn1').on('click', function(e){
	   let body = e.currentTarget.parentElement.parentElement;
	   $(body).css("color","red")
   });
    
	//MOUSEMOVE WITH INTERESTING RESULT
	$(document).on('mousemove', function(e) {
		$('.coords').html('Coords: Y : '+e.clientY+"px"+" X: "+e.clientX+"px");
	});
   
   
   //__________________________________________________________
   
   //Form EVENT
   $('input').focus(function(){
	   alert('focus');
   });
 
   //"this indicates current Element"
   $('input').focus(function(){
	  $(this).css('background','pink'); 
   });
   
   $('input').blur(function(){
	  $(this).css('background','white'); 
   });
     
	 
	$('input').keyup(function(e){
		$('.formdata').html(e.target.value)
	});
	
	
	//CHANGE EVENT
	$('select#gender').change(function(e){
		alert(e.target.value);
	});
	*/
	
	$('#form').submit(function(e){
		e.preventDefault();
		let name = $('input#name').val();
		let email = $('input#email').val();
		let gerder = $('gender,option').val();
		alert(name);
		alert(email);
		alert(gerder);
	});
});