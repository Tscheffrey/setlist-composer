import {moveItem} from "mobx-utils"
import {decorate, observable, action, computed} from "mobx"
import Shortid from 'shortid'

class Store {
  constructor(){
    for (let item of this.songs) {
      item.key = Shortid.generate();
    }
  }

  songs = [
    {
      title: 'Who We Are',
      duration: 210,
    },
    {
      title: 'Break The Silence',
      duration: 103,
    },
    {
      title: 'When You Fall',
      duration: 320,
    },
    {
      title: 'All or Nothing',
      duration: 111,
    },
  ]

  moveSong(oldIndex, newIndex) {
    if(oldIndex !== newIndex) {
      moveItem(this.songs, oldIndex, newIndex);
    }
  }

  get totalDuration() {
    let duration = 0
    for (let song of this.songs) {
      if(song.duration) duration += song.duration
    }
    return duration
  }

  get clipboardText() {
    let lines = [];
    for (var i = 0; i < this.songs.length; i++) {
      let song = this.songs[i]
      lines.push(`${i+1}.\t${song.title}`)
    }
    return lines.join('\n')
  }
}

decorate(Store, {
  songs: observable,
  moveSong: action,
  totalDuration: computed,
})

const GlobalStore = new Store()

export default GlobalStore
