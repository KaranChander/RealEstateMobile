import React from 'react';
import { Dimensions } from 'react-native';
// import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';


const PDFScreen = () => {
    const source = require('../../assets/Real-Estate-Glossary.pdf');
    const { width } = Dimensions.get('window');

  return (
    <WebView
      source={source}
      style={{ flex: 1, width }}
    />

    // <PDFReader
    //     source={{
    //       uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
    //     }}
    //   />
  );
};

export default PDFScreen;