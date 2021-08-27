$(document).ready(function(){
   // $('h1').hide();
   // $('h1#heading1').hide();
    //$('h1.heading2').hide();
    $('p span').css('color','red');

    $('ul#list li').css('list-style','none')
    $('#list li:first').css("color",'red')
    $('#list li:nth(2)').css("color",'brown')


    //odd or even selector
    // mouse hover over function
    $('#list li').hover(function(){
        
        $(this).css({"backgroundColor":"blue","color":"white"})
    },
    function() {
        $(this).css({"backgroundColor":"#f4f4f4","color":"black"})
    }
    )

    // $(':button').fadeOut();
    $(':submit').fadeIn();

    //attribute selectors
    $('[href]').css({'color':'red' });
    $('[href="http://yahoo.com/"]').css({'color':'green' });

    // #COMPELETE SELECTOR
    // $('*').hide();

});