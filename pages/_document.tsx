import Document, { Html, Head, Main, NextScript } from "next/document";
import { styletron } from "../styletron";

class MyDocument extends Document {
  static getInitialProps(props: any) {
    const page = props.renderPage((App: any) => (props: any) => (
      <App {...props} />
    ));
    const stylesheets = (styletron as any).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {(this.props as any).stylesheets.map((sheet: any, i: any) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
