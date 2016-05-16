/// <reference path="IMathOps.ts" />
/// <reference path="Calculator.ts" />
/// <reference path="SciCalculator.ts" />
/// <reference path="CalculatorFactory.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />

import Calculator = GDMath.Calculator;
import SciCalculator = GDMath.SciCalculator;

function showResultUsingBaseCalculator() {
    var calc = new Calculator();
    var op1 : number = $('#operant1').val();
    var op2 : number = $('#operant2').val();

    // ERROR
    // var result : string = calc.add(op1, op2);

    var result : number = calc.add(op1, op2);

    // must call toString()
    $('#result').val(result.toString());
}


function showResultUsingSciCalculator() {
    var calc = new SciCalculator();
    var op1 = $('#operant1').val();

    var result : number = calc.sin(op1);

    $('#result').val(result.toString());
}

/////////////////////////////////////
// lambda
//
function invokeCallback( cb : (x: number)=> number ) {
    return cb(5);
}

function testCallback() {
    invokeCallback((x: number) =>  {
                                        console.debug("Executing lamda function.");
                                        return x * x
                                    });
}