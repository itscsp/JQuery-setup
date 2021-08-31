$(document).ready(function() {

    //FADE OUT
    $('#btnFadeOut').on('click', function(){
        $('.parent1 #box1').fadeOut();
        $('.parent1 #box2').fadeOut("slow");
        $('.parent1 #box3').fadeOut(3000, function(){
            $('#btnFadeOut').text("it's Gone");
        });
    })

    //FODE IN
    $('#btnFadeIn').on('click', function(){
        $('.parent1 #box1').fadeIn();
        $('.parent1 #box2').fadeIn('slow');
        $('.parent1 #box3').fadeIn(3000, function(){
            $('#btnFadeIn').text("I'am back");
        });

    })

    //TOGGLE
    $('#btnFadeTog').on('click', function(){
        $('.parent1 #box1').fadeToggle();
        $('.parent1 #box2').fadeToggle();
        $('.parent1 #box3').fadeToggle(3000, function(){
            $('#btnFadeIn').text("I'am back");
        });

    })

    //SLIDE DOWN
    $('#btnslideUp').on('click', function(){
        $('.parent2 #box1').slideUp(1000);

    
    })

    //slideUp
    $('#btnslidenDown').on('click', function(){
        $('.parent2 #box1').slideDown(3000);
    })

    //slideToggle
    $('#btnslideogTog').on('click', function(){
        $('.parent2 #box1').slideToggle();
    })

  
    $('#btnslideStop').on('click', function(){
        $('.parent2 #box1').stop();
    })

    //MOVE ANIMATION
    //MOVE RIGHT
    $('#btnmoveright').on('click', function(){
        $('.parent3 #box1').animate({
            left:"50%",
            lineHeight:"300px",
            height:"300px",
            width:"300px",
            opacity:"0.5"
        });
    })


    //MOVE LEFT
    $('#btnmoveleft').on('click', function(){
        $('.parent3 #box1').animate({
            left:"0px",
            height:"100px",
            width:"100px",
            opacity:"1",
            lineHeight:"100px",
        });
    })

    //MOVE AROUND
    $('#btnaround').on('click', function(){
        var box = $('.parent3 #box1');
        box.animate({
            left:500
        })
        box.animate({
            top:500
        })
        box.animate({
            left:0,
            top:500
        })
        box.animate({
            left:0,
            top:0
        })
    })



})