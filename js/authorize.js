sample_link = 'https://open.spotify.com/playlist/1SfxpsSNGw0w4r7E3JEkKK?si=P9266UnARQCJP1yemuu00';
sample_uri = 'spotify:playlist:1SfxpsSNGw0w4r7E3JEkKK';


document.getElementById('editBtn').onclick = function () {
    location.href = "edit.html";
}


function authorize() {
  url = 'https://accounts.spotify.com/authorize';
  client_id = '95ef002a6ed240e2a5c91268bd8f64ba';
  response_type = 'token';
  redirect_uri = 'https://blzzrd.github.io/Crystallized';

  request = url + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&response_type=' + response_type;
  console.log(request);
  fetch(request).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function () {
    console.log("ERROR WITH AUTHORIZATION");
  });
}

console.log(authorize());


// WORK ON THIS SOME MORE?? GET RE-FAMILIAR WITH REGEX IN STRINGS.
function get_spotify_id(str) {
  if (str.startsWith("https://open.spotify.com")) {
    regex = '(\/playlist\/).(\w*)';
    match = str.match(regex);
    return match
  }
}

var spotify_id = get_spotify_id(sample_link);
console.log(spotify_id);

function get_playlist_tracks(playlist_id) {
  // clean up  as such https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api
  url = 'https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks'

  access = authorize();
  console.log(access);
  options = {
    method: 'GET',
    headers: {
      'Authorization': "Bearer " + access_token
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(function () {
      console.log("ERROR WITH AUTHORIZATION");
    });


}

get_playlist_tracks('1SfxpsSNGw0w4r7E3JEkKK');
