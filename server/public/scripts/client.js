console.log('JS');
$(document).ready(onReady);
    console.log('JQ');
    
//onReady
function onReady(){

    //Addition
        $('#mathAdd').on('click', calculationTypeAdd);

    //Subtraction
        $('#mathSubtract').on('click', calculationTypeSubtract);

    //Multiplication
        $('#mathMultiply').on('click', calculationTypeMultiply);
        
    //Division
        $('#mathDivide').on('click', calculationTypeDivide); 

    //Button click - POST calculationTypeAdd (hops to server js based on the url)
    function calculationTypeAddPOST(){
        let newEquation = getValuesFromForm();
        console.log('add POST test');
    $.ajax({
        type: 'POST',
        url: '/equations',
        data: {
            numberX: $('#numberX').val(),
            numberY: $('#numberY').val(),
            mathDivide: $('#mathAdd').val()
        }
    }).done(function(response){
        console.log('in calcTypeAdd POST');
    }).fail(function(error){
        console.log('The "/calcTypeAdd" ajax GET request failed with error: ', error);
    });
    }//end calculationTypeAdd

    //Button click - calculationTypeAdd (hops to server js based on the url)
    function calculationTypeAdd(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeAdd',
        }).done(function(data){
            // $('h1').text(data);
            $('#calculation').empty();
            $('#calculation').append(data);
            console.log('in calcTypeAdd button click');
            $('#calcHistory').append(`<li> ${data} </li>`);
            clearInputForm();
        }).fail(function(error){
            console.log('The "/calcTypeAdd" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeAdd

    //Button click - POST calculationTypeSubtract (hops to server js based on the url)
    function calculationTypeSubtractPOST(){
        let newEquation = getValuesFromForm();
        console.log('subtract POST test');
        $.ajax({
            type: 'POST',
            url: '/addEquations',
            data: {
                numberX: $('#numberX').val(),
                numberY: $('#numberY').val(),
                mathDivide: $('#mathSubtract').val()
            }
        }).done(function(response){
            console.log('in calcTypeSubtract POST');
        }).fail(function(error){
            console.log('The "/calcTypeSubtract" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeSubtract

    //Button click - calculationTypeSubtract (hops to server js based on the url)
    function calculationTypeSubtract(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeSubtract',
        }).done(function(data){
            // $('h1').text(data);
            $('#calculation').empty();
            $('#calculation').append(data);
            console.log('in calcTypeSubtract button click');
            $('#calcHistory').append(`<li> ${data} </li>`);
            clearInputForm();
        }).fail(function(error){
            console.log('The "/calcTypeSubtract" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeSubtract

    //Button click - POST calculationTypeMultiply (hops to server js based on the url)
    function calculationTypeMultiplyPOST(){
        let newEquation = getValuesFromForm();
        console.log('multiply POST test');
        $.ajax({
            type: 'POST',
            url: '/equations',
            data: {
                numberX: $('#numberX').val(),
                numberY: $('#numberY').val(),
                mathDivide: $('#mathMultiply').val()
            }
        }).done(function(response){
            console.log('in calcTypeMultiply POST');
        }).fail(function(error){
            console.log('The "/calcTypeMultiply" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeMultiply

    //Button click - calculationTypeMultipy (hops to server js based on the url)
    function calculationTypeMultiply(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeMultiply',
        }).done(function(data){
            // $('h1').text(data);
            $('#calculation').empty();
            $('#calculation').append(data);
            console.log('in calcTypeMultiply button click');
            $('#calcHistory').append(`<li> ${data} </li>`);
            clearInputForm();
        }).fail(function(error){
            console.log('The "/calcTypeMultiply" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeMultiply

    //Button click - POST calculationTypeDivide (hops to server js based on the url)
    function calculationTypeDividePOST(){
        let newEquation = getValuesFromForm();
        console.log('division POST test');
        $.ajax({
            type: 'POST',
            url: '/equations',
            data: {
                numberX: $('#numberX').val(),
                numberY: $('#numberY').val(),
                mathDivide: $('#mathDivide').val()
            }
        }).done(function(response){
            console.log('in calcTypeDivide POST');
        }).fail(function(error){
            console.log('The "/calcTypeDivide" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeDivide

    //Button click - calculationTypeDivide (hops to server js based on the url)
    function calculationTypeDivide(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeDivide',
        }).done(function(data){
            // $('h1').text(data);
            $('#calculation').empty();
            $('#calculation').append(data);
            console.log('in calcTypeDivide button click');
            $('#calcHistory').append(`<li> ${data} </li>`);
            clearInputForm();
        }).fail(function(error){
            console.log('The "/calcTypeDivide" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeDivide
    
      //Clear Inputs
      function clearInputForm(){
        $('#numberX').val('');
        $('#numberY').val('');
      }//end Clear Inputs


}//end onReady