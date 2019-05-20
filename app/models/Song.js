export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get resultTemplate() {
        return `<div class="col-12 song-preview"> 
        <div class="row">
        <div class="col-3 pl-0">
        <img class="img-fluid rounded-circle tiny" src="${this.albumArt}"></div>
        <div class ="col-9">
        <div class="row d-flex align-content-center">
        <div class="col-12 mt-4">
        <h5><em>${this.title}</em></h5>
        <h5>${this.artist}<h5>
        <h5>$${this.price}<h5>   
        </div>    
        <div class="col-12 mb-4">
        <audio controls><source src ="${this.preview}"></audio>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`
    }

    get playlistTemplate() {
        return `<source src="${this.preview}">`
    }

}

//title, artist, price, album art, preview (hint: "html audio tag"))