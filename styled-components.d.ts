/**
 * Por exemplo, não vai reconhecer os atributos do nosso theme
 * Então exportamos essa interface de mesmo nome
 * ref: https://styled-components.com/docs/api#create-a-declarations-file
 */
import theme from 'styles/theme'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // estender propriedades de uma interface a partir de outra interface
  // por valores que já definimos em styles/theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
