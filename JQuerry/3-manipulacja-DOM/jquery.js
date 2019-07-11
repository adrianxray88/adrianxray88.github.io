jQuery( document ).ready( function(){
    'use strict';
    let tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);
    $("#paragraf").text("Ania ma 2 koty");
    $(".paragrafnext").html("to jest <strong>paragraf</strong> z dodanym <strong>HTML</strong>")
    $(".paragrafnext").append("Treść na końcu selektora");
    $(".paragrafnext").after("Treść za selektorem");
    $("strong").remove();
    $('#paragraf').empty();
    $(".paragrafnext").css({'font-size': '3em,', 'color': 'red'});
    $('h1').addClass('blue');
    $('p').remove
    $('h1').attr('imie', "Marcin");
});