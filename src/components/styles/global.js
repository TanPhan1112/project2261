import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {

    body {
      height: 100%;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        font-family: sans-serif;
        height: 100%;
      }
    }
  }
`}
`