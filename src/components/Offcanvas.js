import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``

const Overlay = styled.div`
  background: rgba(255,255,255,0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  transition: all 300ms ease;
  ${props => props.open ? '' : 'pointer-events: none;' }
  ${props => props.open ? 'cursor: pointer;' : ''}
  opacity: ${props => props.open ? 1 : 0 };
`

const Container = styled.menu`
  background: ${props => props.theme.colors.secondarybg ? props.theme.colors.secondarybg : '#FFF' };
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  z-index: 200;
  transition: all 300ms ease;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  opacity: ${props => props.open ? 1 : 0 };
  ${props => props.open ? '' : 'pointer-events: none;' }
  box-shadow: ${props => props.theme.shadows.main ? props.theme.shadows.main : '0 0 30px #0000001f' };
`

class Offcanvas extends React.Component{
  constructor(props){
    super(props)
    this.close = this.close.bind(this)
  }

  close(){
    if(this.props.onClose) this.props.onClose();
  }

  render() {
    return (
      <Wrapper>
        <Overlay open={this.props.open} onClick={this.close}/>
        <Container open={this.props.open} >
          {this.props.children}
        </Container>
      </Wrapper>
    )
  }
}

export default Offcanvas
