var quote = $("blockquote p");
var author= $("blockquote footer");

function getNewQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (data) {
    quote.text(data['quoteText']);
    author.text(data['quoteAuthor']);
    getTweet();
});
}


function getTweet() {
  hrefURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  hrefURL += '"';
  hrefURL += $(".dynamic p").text();
  hrefURL += '"';
  hrefURL += " by ";
  hrefURL += author.text();
  $(".tweet").attr("href", hrefURL);
}

$(document).ready(function () {
  getNewQuote();

  $(".new-quote").click(function () {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (data) {
      getNewQuote();
      var green = Math.round(Math.random() * 150);
      var red = Math.round(Math.random() * 255);
      var blue = Math.round(Math.random() * 255);
      var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
      $("body").css("background", newColor);
      $(".dynamic").css("color", newColor);
      $("blockquote footer").css({"color": newColor,
                                  "opacity": 0.7
                                });
      $(".twitter").css({
                      "background": newColor,
                      "border-color": newColor
                    });
      $(".new-quote").css(
        {"background": newColor,
        "color": "#fff"
        });
  });
});
});
