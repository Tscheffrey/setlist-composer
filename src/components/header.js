import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { List } from 'react-feather';

const Container = styled.div`
  background-color: #90D4A8;
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
`

const Header = ({ siteTitle }) => (
  <Container>
    <List color='white' size='32'/>
    <Headline>
      {/* <Link to="/"> */}
        {siteTitle}
      {/* </Link> */}
      </Headline>
  </Container>
)

export default Header
