import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { CounterProvider } from '../state/counter'
import React from 'react'

const Providers = ({ children }: any) => {
  return (
    <CounterProvider>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </CounterProvider>
  )
}

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
