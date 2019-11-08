import requests
import json


class Song:
    # ahh
    pass

# https://developer.spotify.com/documentation/web-api/reference/playlists/reorder-playlists-tracks/

# Spotify URI: spotify:playlist:5W4w6cir26WZbGvCoUpLIm

def getAuthorization():
    """
    Returns authorization keys in the config.json in the format of client:secret  
    """
    with open('config.json', 'r') as jscfg:
        config = json.load(jscfg)

    client = config["public"]
    secret = config["secret"]
    return ':'.join([client,secret])

def playlist_to_song_objects(playlist_api):
    auth = 'Basic ' + getAuthorization()
    #r = requests.post('https://accounts.spotify.com/api/token', headers={'Authorization': auth})
    r = requests.get('https://api.spotify.com/v1/playlists/5W4w6cir26WZbGvCoUpLIm/tracks', headers={'Authorization': auth})
    print(r)
    # disect R.

    
    # pull the playlist
    # return a list of song objects

    # song objects include :

# print(getAuthorization())
playlist_to_song_objects('')