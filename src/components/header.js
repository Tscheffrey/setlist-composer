import React from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components'
import { FileText } from 'react-feather'
import { ellipsis } from 'polished'

const fadeIn = keyframes`
  from {
    transform: translateY(-70%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const Container = styled.div`
  color: ${props => props.theme.colors.text02 ? props.theme.colors.text02 : 'white' };
  background: ${props => props.theme.colors.main ? props.theme.colors.main : 'gray' };
  padding: 8px 16px;
  display: flex;
  align-items: center;
  ${'' /* animation: ${fadeIn} 800ms ease; */}
`

const Headline = styled.h1`
  font-weight: 400;
  text-transform: lowercase;
  user-select: none;
  margin-left: 16px;
  font-size: 32px;
  ${ellipsis()}
`

const Icon = styled(FileText)`
  flex-shrink: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Icon size='32'/>
    <Headline>
      {/* <Link to="/"> */}
        {siteTitle}
      {/* </Link> */}
      </Headline>
  </Container>
)

export default Header
