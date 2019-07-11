$(function(){
    'use strict';
    

    $('h1').on( function({
        let thisElement = $(this);
        if (thisElement.css("color") == "rgb(255, 165, 0)") {
            thisElement.css("color", "black");
        } else {
            $(this).css("color", "orange");
        },
        'mouseleave': function () {
           $(this).css("color", "inherit");
        },
        'mousecenter': function () {
           $(this).css("color", "red");            
        },
       }
    });
});