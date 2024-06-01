jQuery(function($) {
  $('.skill_rotate').click(function() {
    $('body').toggleClass('rotate');
  })

  $('.skill_turn_lights').click(function() {
    $('.light').toggleClass('off')
  })
})