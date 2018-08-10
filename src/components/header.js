import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { List } from 'react-feather'
import { ellipsis } from 'polished'

const Container = styled.div`
  background: #90D4A8;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`

const Headline = styled.h1`
  color: white;
  font-weight: 400;
  text-transform: lowercase;
  user-select: none;
  margin-left: 16px;
  font-size: 32px;
  ${ellipsis()}
`

const ListIcon = styled(List)`
  flex-shrink: 0;
`

const Header = ({ siteTitle }) => (
  <Container>
    <ListIcon color='white' size='32'/>
    <Headline>
      {/* <Link to="/"> */}
        {siteTitle}
      {/* </Link> */}
      </Headline>
  </Container>
)

export default Header
