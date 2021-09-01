$(document).ready(function() {

    //AJAX Requested
    $('#result').load('../test.html', function(responseTxt, statusTxt, xhr) {//LOAD IS AJAX FUNCTION
        if(statusTxt == "success"){
            alert('AJAX is working...')
        } else if(statusTxt == "error"){
            alert('AJAX is not working...'+ xhr.statusText);
        }
    });
    

    $.get('../test2.html', function(data){
        $('#getresult').html(data);
    });

    //GETING JSON DATA
    $.getJSON('../data.json', function(data){
        $.each(data, function(index, value){
            $('#jsondata').append('<li>'+value.firstName+'</li>');
            $('#jsondata').prepend('<li>'+value.email+'</li>');
        })
    }) 

    //GETTING JSON DATA FROM API
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(post, i){
            $('#APIresult').append('<h3>'+post.title+'</h3><p>'+post.body+'</p><hr><hr>');

        })
    })

    //PUTING DATA INTO API
    $('#postdata').submit(function(e){
        e.preventDefault();

    var  title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, {title: title, body: body})
            .done(function(data){
                console.log('Post Saved');
                console.log(data);
            });

    });

});