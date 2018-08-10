import React, {Component} from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished'
import { FiPlus, FiMenu, } from 'react-icons/fi';

const Container = styled.li`
  list-style-type: none;
  margin: 0;
  cursor: grab;
  background: white;
  border: 1px solid transparent;
  border-bottom-color: #efefef;
  width: 100%;
  display: flex;
  padding: 8px 4px;
  user-select: none;
  &:last-child {
    border-bottom-color: transparent;
  }
`

const Button = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const AddButton = Button.extend`

`

const DragHandleWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const Title = styled.span`
  font-size: 24px;
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
          <FiMenu/>
        </DragHandleWrapper>
        <FixedSpacer width={12}/>
        <Title>{this.props.item.title}</Title>
        <FlexibleSpacer/>
        <AddButton>
          <FiPlus/>
        </AddButton>
      </Container>
    )
  }

}

export default ListItem
