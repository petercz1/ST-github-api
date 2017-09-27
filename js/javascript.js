console.log('loaded js');

$(document).ready(do_setup);

function do_setup(){
    $('#enter').click(get_http);
}

function get_http(){
    console.log('Inside get_http');
    var url = $('#http_request').val();

    var request = {};
    request.url = url;
    // Which REST verb do you need?
    request.type = 'DELETE'; // or POST
    // weird github-specific stuff for setting your authentication - grrr....
    request.beforeSend = function(req){
        req.setRequestHeader('Authorization', 'Basic ' + btoa('petercz1:mOrgan01'));
    };
    console.log(request);

    $.ajax(request).done(process_data).fail();
    //$.get(request).done(process_data).fail(blow_up);
}

function process_data(data, status, headers){
    console.log(data);
    console.log(status);
    console.log(headers.getAllResponseHeaders());
}

function blow_up(){
    console.log('Inside blow_up;');
    ;
}