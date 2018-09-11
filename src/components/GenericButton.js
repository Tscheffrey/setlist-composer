import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text02 ? props.theme.colors.text02 : 'white' };
  background: ${props => props.theme.colors.main ? props.theme.colors.main : 'lightgray' };
  padding: 8px 16px;
  border: 0;
  border-radius: 20px;
`

const Text = styled.span`
  font-size: 16px;
`

class GenericButton extends React.Component{
  constructor(props){
    super(props)
    // this.close = this.close.bind(this)
  }

  close(){
    if(this.props.onClose) this.props.onClose();
  }

  text(){
    if(this.props.text) return <Text>{this.props.text}</Text>
  }

  icon(){
    if(this.props.icon) {
      return styled(this.props.icon)`
        margin-right: 8px;
      `
    }
  }

  render() {
    return (
      <Wrapper>
        {this.icon()}
        {this.text()}
      </Wrapper>
    )
  }
}

export default GenericButton
