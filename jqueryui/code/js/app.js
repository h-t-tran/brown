$(function(){

    ////////////////////////////////////////////
    // Button
    $( "#mybutton" ).button({
        disabled : false,
        icon: "ui-icon-star",
        iconPosition: "end",
        label : 'Click me',
        click : function() {
            alert('button clicked');
        }
    });

    ////////////////////////////////////////////
    // create a button
    $( "#openDlg" ).button({
        disabled : false,
        label : 'Open Dialog'
    });

    // attach handler to show dialog
    $( "#openDlg" ).click(function() {
        $('#confirmDialog').dialog('open');
    });


    // dialog
    $('#confirmDialog').dialog({
        autoOpen : false,
        modal : true,
        width : 500,
        draggable : false,
        title : 'Confirm?',
        buttons : {
            'Yes' : function () {
                alert('submitted');
                $(this).dialog('close');
            },
            'No' : function () {
                $(this).dialog('close');
            }
        },

        // event handlers
        open : function(event, ui) {
            console.info('dialog open fired event ', event, ", ui ", ui);
        }
    });


    ///////////////////////////////////////////////////
    // slider
    $('#mySlider').slider({
        min: 0,
        max: 100,
        range: false,
        change : function( event, ui) {
            console.info('slider change value ', ui.value);
        }
    });

    $('#mySlider2').slider({
        range: true,
        values : [0, 100],
        change : function( event, ui) {
            console.info('slider (with range) change values ', ui.values);
        }
    });


    ////////////////////////////////////////////////////
    // Progressbar
    $('#myProgress').progressbar({
        min : 0,
        max : 120,
        value : 30
    });

    $('#randomProgressButton').button();
    $('#randomProgressButton').click(function() {
        var curVal = $('#myProgress').progressbar("option", "value");
        curVal += 10;
        if( curVal > 120 ) {
            curVal = 0;
        }
        $('#myProgress').progressbar("option", "value", curVal);
    });

    ///////////////////////////////////////////////////////////
    // Datepicker
    $('#myDatePicker').datepicker({
        monthNames: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
        dateFormat: "yy-mm-dd"
    });
    $('#myDatePicker').datepicker('option', 'onSelect', function(dateText, instance ) {
        console.info("DatePicker selected date: ", dateText);
    });


    $('#myAccordian').accordion({
        header: 'h2',
        collapsible : false
    });
});