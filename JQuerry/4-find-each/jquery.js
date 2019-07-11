$(function(){
    'use strict';
    $('body').find('p').eq(0).css({'color': 'green'});

    $('p').each( function(index) {
        $(this).addClass('paragraf-' + index);
        console.log(jQuery(this));
    })
})