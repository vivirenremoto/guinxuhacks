
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



function share() {
    var share_title = 'Guinxu Hacks - Juego';
    var share_url = 'https://vivirenremoto.github.io/guinxuhacks/';
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(share_title) + '&tw_p=tweetbutton&url=' + encodeURIComponent(share_url));
}


var screen_height = $(document).height();
var screen_width = $(document).width();
var is_mobile = screen_width < 500;


if (window.parent) {
    $('body').click(function () {
        window.parent.$('body').trigger('play_music');
    });
}