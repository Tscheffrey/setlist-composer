import React from 'react'
import Link from 'gatsby-link'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from '../util/arrayMove'
import List from '../components/List'
import CopyText from '../components/CopyText'

import styled from 'styled-components';
import Offcanvas from '../components/Offcanvas'
import {decorate, observable, action, computed} from "mobx"
import {observer} from "mobx-react"
import {moveItem} from "mobx-utils"
import GlobalStore from '../stores/GlobalStore'


const SortableList = SortableContainer(observer(List))

class SortableComponent extends React.Component {
  onSortEnd = ({oldIndex, newIndex}) => {
    GlobalStore.moveSong(oldIndex, newIndex)
  };
  render() {
    return <SortableList lockAxis='y' items={GlobalStore.songs} onSortEnd={this.onSortEnd} />;
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
        <CopyText copyText={GlobalStore.clipboardText}/>
        {/* <div onClick={this.toggleOffcanvas}>offcanvas</div> */}
        {/* <div>Duration: {GlobalStore.totalDuration}</div> */}
      </div>
    )
  }
}

export default observer(Main)
