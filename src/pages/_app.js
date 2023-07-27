// _app.js

import React from "react";
import App from "next/app";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Roboto-Bold.ttf liegt im öffentlichen Ordner unter /fonts/ */
  @font-face {
    font-family: 'Roboto-Black';
    src: url('/fonts/Roboto-Black.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenSans';
    src: url('/fonts/OpenSans-ExtraBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'OpenSans-Medium';
    src: url('/fonts/OpenSans-Medium.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  /* Hier kannst du weitere @font-face-Regeln für andere Schriftarten hinzufügen */

  body {
    font-family: 'Roboto-Bold', sans-serif; /* Verwende die Schriftart 'Roboto-Bold' als Standard für den Body */
    margin: 0;
    padding: 0;
  }
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start; // Ausrichtung auf flex-start geändert
  background-color: #f7f7f7;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: auto;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Layout>
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
        </Layout>
      </>
    );
  }
}

export default MyApp;
