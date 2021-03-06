import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 300;
  position: relative;
  color: ${props => props.theme.colors.ui02 ? props.theme.colors.ui02 : '#121212' };
  opacity: ${props => props.theme.visible ? 0 : 1 };
  font-size: 0.7em;
  flex-shrink: 0;
  text-align: right;
  height: auto;
  min-width: 4ch;
`

class Duration extends React.Component {
  format(){
    if(!this.props.duration) return '00:00'
    let duration = this.props.duration;
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    return minutes + ':' + seconds;
  }

  render(){
    return(
      <Container visible={!!this.props.duration}>{this.format()}</Container>
    )
  }

}

export default Duration
