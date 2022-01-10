import Document, { Html, Head, Main, NextScript } from 'next/document'

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
    <Html style={{width:'100%', height:'100%'}}>
        <Head>
          <style>{`
            @media (min-width: 768px) {
              #__next { height: 100%; width:100%; min-height:700px; }
            }
          `}
          </style>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          
        </Head>
        <body style={{margin:'0 auto',width:'100%', height:'100%', backgroundColor:'hsl(218, 22%, 67%)'}}>
          <Main/>
          <NextScript />
          <footer style={{position:'relative',top:'-40px'}}>
            <p class="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="#">Your Name Here</a>.
            </p>
          </footer>
        </body>
      </Html>
    );
  }
}