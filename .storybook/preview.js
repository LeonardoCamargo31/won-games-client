/**
 * Como nosso storybook não esta usando o app
 * Precisamos configurar para pegar o theme ThemeProvider
 * Assim como fizemos com o GlobalStyles
*/

import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) =>(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Story/>
    </ThemeProvider>
  )
]