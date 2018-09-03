import React from 'react'
import Link from 'gatsby-link'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import List from '../components/List'
import CopyText from '../components/CopyText'
import Shortid from 'shortid'
import styled from 'styled-components';
import Offcanvas from '../components/Offcanvas'

const SortableList = SortableContainer(List);

const availableItems = [
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

for (let item of availableItems) {
  item.key = Shortid.generate();
}
class SortableComponent extends React.Component {
  state = {
    items: availableItems
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList lockAxis='y' items={this.state.items} onSortEnd={this.onSortEnd} />;
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
        <CopyText copyText={'1. This is a Test\n2. This is a Test\n3. This is a Test'}/>
        {/* <div onClick={this.toggleOffcanvas}>offcanvas</div> */}
      </div>
    )
  }
}

export default Main
