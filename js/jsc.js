$(document).ready(() => {

function hideAll() {
  $('#playEmotionless').hide();
  $('#playPassionfruit').hide();
  $('#playYou').hide();
  $('#playDoing').hide();
  $('#moreDrake').hide();
}
  hideAll();

$('audio').each(function() {
  this.pause();
  this.currentTime = 0;
});


$('#scorpion').click(function () {
     $('audio').attr('src', 'audio/drake_emotionless.mp3');

      });

$('#morelife').click(function () {
    $('audio').attr('src', 'audio/drake_passionfruit.mp3');
    });

$('#ifyou').click(function () {
    $('audio').attr('src', 'audio/drake_youandthe6.mp3');
   });

$('#takecare').click(function () {
    $('audio').attr('src', 'audio/drake_doingitwrong.mp3');
    });

$('.albumCover').click(function() {
  hideAll();

  switch ($(this).attr("id")) {
        case "scorpion":
          $('#playEmotionless').show();
          break;
        case "morelife":
          $('#playPassionfruit').show();
          break;
        case "ifyou":
          $('#playYou').show();
          break;
        case "takecare":
          $('#playDoing').show();
          break;
      }
    });

    $('#drake').click(function () {
         $('#moreDrake').slideToggle();
          });





});
