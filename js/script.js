
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var debug = true;
    if (debug) {
      switch (0) {
        case 1:
          var street = $('#street').val('3700 S Las Vegas Blvd');
          var city = $('#city').val('Las Vegas NV');
          break;
        default:
          var street = $('#street').val('1600 pennsylvania ave');
          var city = $('#city').val('Washington DC');
          break;
      }
    }

    var street = $('#street').val();
    var city = $('#city').val();
    var location = street + ", " + city;
    $greeting.text('So, you are thinking of living at ' + location + '?');
    var ajaxUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + location;
    var img = '<img class="bgimg" src="' + ajaxUrl + '">';
    $body.append(img);

    // YOUR CODE GOES HERE!
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({'api-key': "57575961577542d386f9f4665b401e00",
      'q': city});
    $.getJSON( url, function( data ) {
      $nytHeaderElem.text('New York Times Articles About' + city);
      $.each( data.response.docs, function( idx, doc ) {
        var a = '<a href="' + doc.web_url + '">' + doc.headline.main + '</a>';
        var p = '<p>' + doc.snippet + '</p>';
        var li = '<li class="article" id="' + doc._id +'">' + a + p + '</li>';
        $nytElem.append(li);
      });
    })
    .fail(function() {
      $nytHeaderElem.text('Failed! Could not load the New York Times Articles');
    });

    return false;
};

$('#form-container').submit(loadData);
