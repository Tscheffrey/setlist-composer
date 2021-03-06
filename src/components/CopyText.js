import React from 'react'
import styled from 'styled-components'
import { Clipboard } from 'react-feather'
import copy from 'clipboard-copy'
import {notify} from 'react-notify-toast'

const Button = styled.button`
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

const Icon = styled(Clipboard)`
  margin-right: 8px;
`

class CopyText extends React.Component {
  onCopy(){
    copy(this.props.copyText)
    notify.show(this.props.successText, null, 1500)
  }

  render(){
    return(
      <Button onClick={this.onCopy.bind(this)}>
        <Icon />
        <Text>Copy to clipboard</Text>
      </Button>
    )
  }
}

CopyText.defaultProps = {
  text: 'Copy to clipboard',
  copyText: '',
  successText: 'Copied to Clipboard.',
};

export default CopyText
