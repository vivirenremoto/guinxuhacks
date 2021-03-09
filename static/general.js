
function randomNumber(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    if (min <= 0) {
        return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function nextStage() {
    window.parent.$('body').trigger('complete');
}

function openDoor() {

    window.parent.$('body').trigger('open_door');
    $('#llave').hide();
    $('#puerta').addClass('puerta_abierta').click(function () {
        nextStage();
    });
}


var screen_height = $(document).height();
var screen_width = $(document).width();


$('body').click(function () {

    window.parent.$('body').trigger('play_music');
});