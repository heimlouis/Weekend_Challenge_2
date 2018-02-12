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

    //Button click - calculationTypeAdd (hops to server js based on the url)
    function calculationTypeAdd(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeAdd',
        }).done(function(data){
            $('h1').text(data);
            console.log('in calcTypeAdd button click');
        }).fail(function(error){
            console.log('The "/calcTypeAdd" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeAdd

    //Button click - calculationTypeSubtract (hops to server js based on the url)
    function calculationTypeSubtract(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeSubtract',
        }).done(function(data){
            $('h1').text(data);
            console.log('in calcTypeSubtract button click');
        }).fail(function(error){
            console.log('The "/calcTypeSubtract" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeSubtract

    //Button click - calculationTypeMultipy (hops to server js based on the url)
    function calculationTypeMultiply(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeMultiply',
        }).done(function(data){
            $('h1').text(data);
            console.log('in calcTypeMultiply button click');
        }).fail(function(error){
            console.log('The "/calcTypeMultiply" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeMultiply

    //Button click - calculationTypeDivide (hops to server js based on the url)
    function calculationTypeDivide(){
        $.ajax({
            type: 'GET',
            url: '/calcTypeDivide',
        }).done(function(data){
            $('h1').text(data);
            console.log('in calcTypeDivide button click');
        }).fail(function(error){
            console.log('The "/calcTypeDivide" ajax GET request failed with error: ', error);
        });
    }//end calculationTypeDivide

    getAllCalculations();

    function getAllCalculations(){
        $ajax({
            type: 'GET',
            url: '/calculations'
        }).done(function(response){
            console.log('getAllCalcualtions Request Was Successful');
            displayCalculations(response);
        }).fail(function(response){
            console.log(response);
        });
    }

    function displayCalculations(calculations){
        $('#calcHistory').empty();
        let $ul = $('<ul></ul>');
        for (let calculation of calculations){
            $ul.append(`<li>
            ${calculation.firstNuber},
            ${calculation.calcTypeAdd},
            ${calculation.calcTypeSubtract},
            ${calculation.calcTypeMultiply},
            ${calculation.calcTypeDivide}
            </li>`);
        }
        $('#calcHistory').append($ul);
    }

    function addMathEquation(){
        let newEquation = getValuesFromDOM();
        console.log('addMathEquation', newEquation);
        $.ajax({
          type: 'POST',
          url: '/addMathEquation',
          data: {calc: newEquation}
        }).done(function(response){
            console.log('in equation post');
            get();
            clearInputForm();
        }).fail(function(error){
          console.log(error);
        });
    }
    
      //Clear Inputs
      function clearInputForm(){
        $('#numberX').val('');
        $('#numberY').val('');
      }//end Clear Inputs

      //Get values from form
      function getValuesFromDOM(){
        let firstNumber = $('#numberX').val();
        let calcTypeAdd = $('#mathAdd').val();
        let calcTypeSubtract = $('#mathSubtract').val();
        let calcTypeMultiply = $('#mathMultiply').val();
        let calcTypeDivide = $('#mathDivide').val();
        let secondNumber = $('#numberY').val();
        let calculation = { 
            firstNuber: firstNumber,
            calcTypeAdd: calcTypeAdd,
            calcTypeSubtract: calcTypeSubtract,
            calcTypeMultiply: calcTypeMultiply,
            calcTypeDivide: calcTypeDivide,
            secondNumber: secondNumber
        }
        return calculation;
      }//end values from form

}//end onReady