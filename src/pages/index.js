import React from 'react'
import Link from 'gatsby-link'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from '../util/arrayMove'
import List from '../components/List'
import CopyText from '../components/CopyText'
import Shortid from 'shortid'
import styled from 'styled-components';
import Offcanvas from '../components/Offcanvas'
import {decorate, observable, action, computed} from "mobx"
import {observer} from "mobx-react"
import {moveItem} from "mobx-utils"

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

const appStore = new Store()

const SortableList = SortableContainer(observer(List))

class SortableComponent extends React.Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    appStore.moveSong(oldIndex, newIndex)
  };
  render() {
    return <SortableList lockAxis='y' items={appStore.songs} onSortEnd={this.onSortEnd} />;
  }
}

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      offcanvasOpen: false
    }
    this.toggleOffcanvas = this.toggleOffcanvas.bind(this)
  }

  toggleOffcanvas() {
    this.setState({offcanvasOpen:!this.state.offcanvasOpen})
  }

  render(){
    return(
      <div>
        <Offcanvas open={this.state.offcanvasOpen} onClose={this.toggleOffcanvas}/>
        <SortableComponent/>
        <CopyText copyText={appStore.clipboardText}/>
        {/* <div onClick={this.toggleOffcanvas}>offcanvas</div> */}
        {/* <div>Duration: {appStore.totalDuration}</div> */}
      </div>
    )
  }
}

export default observer(Main)
