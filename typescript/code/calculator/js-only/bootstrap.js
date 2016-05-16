
function showResultUsingBaseCalculator() {
    var calc = new Calculator();
    var op1 = $('#operant1').val();
    var op2 = $('#operant2').val();

    // concat 2 strings!
    // Typscript will prevent this operation!
    ///var result = calc.add(op1, op2);

    // add 2 numbers.
    var result = calc.add(parseInt(op1), parseInt(op2));

    $('#result').val(result);
}


function showResultUsingSciCalculator() {
    var calc = new SciCalculator();
    var op1 = $('#operant1').val();

    // sin of a string!
    var result = calc.sin(op1);


    // sin of a number
    var result = calc.sin(parseInt(op1));

    $('#result').val(result);
}
