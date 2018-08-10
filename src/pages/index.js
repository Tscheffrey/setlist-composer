import React from 'react'
import Link from 'gatsby-link'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ListItem from '../components/ListItem'
import Shortid from 'shortid'

const SortableItem = SortableElement(({value}) =>
  <ListItem item={value} />
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem key={item.key} index={index} value={item} />
      ))}
    </ul>
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
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent
