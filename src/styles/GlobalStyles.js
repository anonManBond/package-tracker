import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.fontSizes.base};
    transition: background 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.colors.subtext};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
