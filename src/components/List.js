import React, {Component} from 'react';
import styled from 'styled-components';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import ListItem from '../components/ListItem'

const SortableItem = SortableElement(({value}) =>
  <ListItem item={value} />
);


const SortableListContainer = styled.ul`
  background: ${props => props.theme.colors.ui01 ? props.theme.colors.ui01 : '#121212' };
  border: ${props => props.theme.sizes.border01 ? props.theme.sizes.border01 : '1px' } solid ${props => props.theme.colors.ui01 ? props.theme.colors.ui01 : '#121212' };
  border-radius: ${props => props.theme.sizes.borderradius01 ? props.theme.sizes.borderradius01 : '4px' };
  overflow: hidden;
`

class List extends React.Component{
  render() {
    return (
      <SortableListContainer>
        {this.props.items.map((item, index) => (
          <SortableItem key={item.key} index={index} value={item} />
        ))}
      </SortableListContainer>
    )
  }
}

export default List
