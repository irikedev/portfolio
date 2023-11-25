$("#home").click(() => {
    $('.home').removeClass('hide');
    $('.projects').addClass('hide');
    $('.contact').addClass('hide');
  });

  $("#projects").click(() => {
    $('.home').addClass('hide');
    $('.projects').removeClass('hide');
    $('.contact').addClass('hide');
  });

  $("#contact").click(() => {
    $('.home').addClass('hide');
    $('.projects').addClass('hide');
    $('.contact').removeClass('hide');
});