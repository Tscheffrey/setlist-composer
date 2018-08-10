import React, {Component} from 'react';
import styled from 'styled-components'

const Container = styled.div`
  cursor: grab;
`

const AddButton = styled.button`
  cursor: pointer;
`

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        {this.props.item.title + ' '}
        <AddButton>+</AddButton>
      </Container>
    )
  }

}

export default ListItem
