/**
/// <reference path="IMathOps.ts" />
/// <reference path="Calculator.ts" />
/// <reference path="SciCalculator.ts" />
/// <reference path="CalculatorFactory.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
***/
var Calculator = GDMath.Calculator;
var SciCalculator = GDMath.SciCalculator;
function showResultUsingBaseCalculator() {
    var calc = new Calculator();
    var op1 = $('#operant1').val();
    var op2 = $('#operant2').val();
    // ERROR
    // var result : string = calc.add(op1, op2);
    var result = calc.add(parseInt(op1), parseInt(op2));
    // must call toString()
    $('#result').val(result.toString());
}
function showResultUsingSciCalculator() {
    var calc = new SciCalculator();
    var op1 = $('#operant1').val();
    var result = calc.sin(parseInt(op1));
    $('#result').val(result.toString());
}
/////////////////////////////////////
// lambda
//
function invokeCallback(cb) {
    return cb(5);
}
function testCallback() {
    invokeCallback(function (x) {
        console.debug("Executing lamda function.");
        return x * x;
    });
}
