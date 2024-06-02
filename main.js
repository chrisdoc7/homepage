jQuery(function($) {
  $('.skill-rotate').click(function() {
    $('body').toggleClass('rotate');
  });

  $('.skill-turn_lights').click(function() {
    $('.light').toggleClass('off');
  });

  $('body').on('click', '.skill-multiply', function() {
    $(this).clone().insertAfter(this);
  });

  $('.skill-divide').click(function() {
    $(this).find('span').show();
  });

  $('.skill-get_cats').click(function() {
    $('.cats svg').show();
    $('.cats div').html('');
    $.ajax('https://api.thecatapi.com/v1/images/search').done(function(data) {
      let cat_image_url = data[0].url;
      let cat_image_width = data[0].width;
      let cat_image_height = data[0].height;
      $('.cats div').html(`<img width="${cat_image_width}" height="${cat_image_height}" src="${cat_image_url}">`);
      $('.cats svg').hide();
    });
  });

  $('.skill-destroy').click(function() {
    if (window.confirm("Are you sure? 😱")) {
      $('html').html('');
    }
  });
})