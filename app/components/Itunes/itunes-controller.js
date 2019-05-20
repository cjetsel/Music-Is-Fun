import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  let currentSongs = itunesService.Songs
  let template = ''
  for (let i = 0; i < currentSongs.length; i++) {
    let song = currentSongs[i];
    template += song.resultTemplate;
  }
  document.getElementById('song-list').innerHTML = template;
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').innerHTML = `<i
    class="fas fa-compact-disc"></i>`;
  console.log(itunesService.Songs)
}




//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').innerHTML = `<i
      class="fas fa-spin fa-compact-disc"></i>`
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController