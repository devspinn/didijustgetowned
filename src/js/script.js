var main = function() {
  var endpoint = 'https://api.giphy.com/v1/gifs/random';
  var params = { api_key : 'dc6zaTOxFJmzC', tag : 'owned' };
  var str = $.param( params );
  var url = endpoint + '?' + str;

  $.getJSON( url, function( data ) {
    $('.gif').attr('src', data.data.image_url);
  });


  var theText = "this is a test";

function nextSize(i,incMethod,textLength)
{
  if (incMethod == 1) return (72*Math.abs( Math.sin(i/(textLength/3.14))) );
  if (incMethod == 2) return (255*Math.abs( Math.cos(i/(textLength/3.14))));
}

function sizeCycle(text,method,dis)
{
  output = "";
  for (i = 0; i < text.length; i++)
  {
    size = parseInt(nextSize(i +dis,method,text.length));
    output += "<font style='font-size: "+ size +"pt'>" +text.substring(i,i+1)+ "</font>";
  }
  theDiv.innerHTML = output;
}

function doWave(n)
{  
  sizeCycle(theText,1,n);
  if (n > theText.length) {n=0}
  setTimeout("doWave(" + (n+1) + ")", 50);
}

doWave(0);
};

$(document).ready(main);
