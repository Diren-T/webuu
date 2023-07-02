import React from "react";
import App from "next/app";
import styled from "styled-components";

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f7f7;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: auto;
  overflow-x: hidden; // Neue CSS-Eigenschaft hinzugefügt
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <ContentWrapper>
          <Component {...pageProps} />
        </ContentWrapper>
      </Layout>
    );
  }
}

export default MyApp;
