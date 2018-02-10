console.log('JS');
$(document).ready(onReady);
    console.log('JQ');
    
function onReady(){
        $('#buttonClickTest').on('click', buttonClickTestFunction);
        $('#calculate').on('click', calculateButtonClickFunction);
    }

//Button click - test function
function buttonClickTestFunction(){
    $.ajax({
        type:'GET',
        //This is the tie to the server.js - app.get('/test',
        url: '/test',
    }).done(function(data){
        $('h1').text(data);
    }).fail(function(error){
        console.log('The "/test" ajax GET request failed with error: ', error);
    });
}//end buttonClickTestFunction

//Button click - calculate function
function calculateButtonClickFunction(){
    $.ajax({
        type: 'GET',
        url: '/calcBtnMod',
    }).done(function(data){
        $('h1').text(data);
    }).fail(function(error){
        console.log('The "/calcBtnMod" ajax GET request failed with error: ', error);
    });
}//end buttonClickCalculateFunction