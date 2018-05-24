$(function(){

    $('#folder1').draggable({
        revert: 'invalid',  // restore to original pos if can't dropped.
        cursor: "move"
    });

    $('#file1').draggable({
        revert: 'invalid',  // restore to original pos if can't dropped.
        cursor: "move"
    });

    $('#file-permanent').draggable({
        revert: 'invalid',  // restore to original pos if can't dropped.
        cursor: "not-allowed"
    });

    $('#trash').droppable({

        tolerance: 'fit',  // 'touch'

        // highlight the drop zone to indicate where to drop.
        activeClass: "opaque",

        // any element with acceptable style is dropable.
        accept : '.acceptable',

        drop: function (event, ui) {
            // delete the dropped element
            ui.draggable.hide("explode");

            ui.draggable.fadeOut(function() {
                ui.draggable.remove();
            })

        }
    });
});