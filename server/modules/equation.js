const equation = require('./addEquations');

const equationArray = []

function add(equation){
    equationArray.push(equation);
}

function getAll(){
    return equationArray;
}

module.exports = {
    addEquation: add,
    getAll
}