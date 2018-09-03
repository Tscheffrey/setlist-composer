import React, {Component} from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished'
import { Plus, Menu, } from 'react-feather';
import Duration from '../components/Duration';

const Container = styled.li`
  color: ${props => props.theme.colors.text01 ? props.theme.colors.text01 : '#121212' };
  list-style-type: none;
  margin: 0;
  cursor: grab;
  background: white;
  border: ${props => props.theme.sizes.border01 ? props.theme.sizes.border01 : '1px' } solid transparent;
  border-bottom-color: ${props => props.theme.colors.ui01 ? props.theme.colors.ui01 : '#121212' };
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 4px;
  user-select: none;
  font-size: 24px;
  &:last-child {
    border-bottom-color: transparent;
  }
`

const Button = styled.div`
  color: ${props => props.theme.colors.ui02 ? props.theme.colors.ui02 : '#121212' };
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const AddButton = styled(Button)`

`

const DragHandleWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${props => props.theme.colors.ui02 ? props.theme.colors.ui02 : '#121212' };
`

const Title = styled.span`
  position: relative;
  top: 2px;
  ${ellipsis()}
`

const FlexibleSpacer = styled.div`
  height: 10px;
  width: auto;
  flex-grow: 999999999;
`

const FixedSpacer = styled.div`
  height: 10px;
  ${'' /* background: red; */}
  flex-grow: 0;
  flex-shrink: 0;
  width: ${props => props.width  ? props.width : 8 }px;
`

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <DragHandleWrapper>
          <Menu/>
        </DragHandleWrapper>
        <FixedSpacer width={12}/>
        <Title>{this.props.item.title}</Title>
        <FlexibleSpacer/>
        <Duration duration={this.props.item.duration}/>
        <FixedSpacer width={12}/>
        <AddButton>
          <Plus/>
        </AddButton>
      </Container>
    )
  }

}

export default ListItem
