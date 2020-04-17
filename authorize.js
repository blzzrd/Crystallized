sample_link = 'https://open.spotify.com/playlist/1SfxpsSNGw0w4r7E3JEkKK?si=P9266UnARQCJP1yemuu00';
sample_uri  = 'spotify:playlist:1SfxpsSNGw0w4r7E3JEkKK';

function authorize() {
    url = 'https://accounts.spotify.com/authorize';
    client_id = '95ef002a6ed240e2a5c91268bd8f64ba';
    response_type = 'token';
    redirect_uri = 'https://blzzrd.github.io/crystallized';

    request = url + '?client_id=' + client_id + '&redirect_uri=' + redirect_uri + '&response_type=' + response_type;
    fetch(request).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
    }).catch(function(){
        console.log("ERROR WITH AUTHORIZATION");
    });
}

authorize();