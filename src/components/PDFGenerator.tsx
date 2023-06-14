'use client'

import React from 'react'
import QRCode from 'react-qr-code'
import { PDFViewer ,Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  viewer: {
    
  },
  page: {
    flexDirection: 'column',
    display: 'flex',
    width: '80%',
    margin: 'auto',
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center'  
  },
  view: {
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

type PDFGeneratorProp = {
  id: string
}

export const PDFGenerator = ({id}: PDFGeneratorProp) => {
  return (
    // <PDFViewer style={styles.viewer}>
    <div className="">
      <Document>
        <Page size="B2" style={styles.page}>
          <View style={styles.section}>
            <QRCode value={`localhost:3000/profile/${id}`} />
          </View>
          <View style={styles.section}>
            <Text>Perfil de {id}</Text>
          </View>
        </Page>
      </Document>
    </div>
    // </PDFViewer>
  )
}
