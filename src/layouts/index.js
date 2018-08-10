import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-rubik'
import Notifications from 'react-notify-toast';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../util/theme.json'

import Header from '../components/header'
import './index.css'

injectGlobal`
  body {
    background: ${theme.colors.mainbg ? theme.colors.mainbg : 'lightgray' }
  }
`


const Layout = ({ children, data }) => (
<ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          // { name: 'description', content: 'Sample' },
          // { name: 'keywords', content: 'sample, something' },
          { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        ]}
      />
      <Notifications/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
