import React from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

/**
 * The PDFScreen function returns a WebView component that displays a PDF file from a specified source.
 * @returns The PDFScreen component is being returned. It renders a WebView component that displays a
 * PDF file from the specified source. The style of the WebView is set to flex: 1 and width equal to
 * the width of the window.
 */

const PDFScreen = () => {
    const source = require('../../assets/Real-Estate-Glossary.pdf');
    const { width } = Dimensions.get('window');

  return (
    <WebView
      source={source}
      style={{ flex: 1, width }}
    />
  );
};

export default PDFScreen;