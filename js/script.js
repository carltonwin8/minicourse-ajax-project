
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
    var debug = false;
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

    return false;
};

$('#form-container').submit(loadData);
