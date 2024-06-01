jQuery(function($) {
  $('.skill_rotate').click(function() {
    $('body').toggleClass('rotate');
  });

  $('.skill_turn_lights').click(function() {
    $('.light').toggleClass('off');
  });

  $('body').on('click', '.skill_multiply', function() {
    $(this).clone().insertAfter(this);
  });

  $('.skill_divide').click(function() {
    $(this).find('span').show();
  });
})