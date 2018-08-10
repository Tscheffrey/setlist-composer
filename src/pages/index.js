import React from 'react'
import Link from 'gatsby-link'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ListItem from '../components/ListItem'
import CopyText from '../components/CopyText'
import Shortid from 'shortid'
import styled from 'styled-components';

const SortableItem = SortableElement(({value}) =>
  <ListItem item={value} />
);

const SortableListContainer = styled.ul`
  background: ${props => props.theme.colors.ui01 ? props.theme.colors.ui01 : '#121212' };
  border: ${props => props.theme.sizes.border01 ? props.theme.sizes.border01 : '1px' } solid ${props => props.theme.colors.ui01 ? props.theme.colors.ui01 : '#121212' };
  border-radius: ${props => props.theme.sizes.borderradius01 ? props.theme.sizes.borderradius01 : '4px' };
  overflow: hidden;
`

const SortableList = SortableContainer(({items}) => {
  return (
    <SortableListContainer>
      {items.map((item, index) => (
        <SortableItem key={item.key} index={index} value={item} />
      ))}
    </SortableListContainer>
  );
});

const availableItems = [
  {
    title: 'Who We Are',
  },
  {
    title: 'Break The Silence',
  },
  {
    title: 'When You Fall',
  },
  {
    title: 'All or Nothing',
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
  render(){
    return(
      <div>
        <SortableComponent/>
        <CopyText copyText={'1. This is a Test\n2. This is a Test\n3. This is a Test'}/>
      </div>
    )
  }
}

export default Main
