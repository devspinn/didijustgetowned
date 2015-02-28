var main = function() {
  var endpoint = 'https://api.giphy.com/v1/gifs/random';
  var params = { api_key : 'dc6zaTOxFJmzC', tag : 'owned' };
  var str = $.param( params );
  var url = endpoint + '?' + str;

  $.getJSON( url, function( data ) {
    $('.gif').attr('src', data.data.image_url);
  });
};

$(document).ready(main);