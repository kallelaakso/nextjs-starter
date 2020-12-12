import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import React from 'react'

import { CounterProvider } from '../state/counter'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

class NewApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <CounterProvider>
            <Component {...pageProps} />
          </CounterProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default NewApp
