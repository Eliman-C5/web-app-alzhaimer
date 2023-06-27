'use client'

import React from 'react'
import QRCode from 'react-qr-code'
import { PDFViewer ,Page, Text, View, Document, StyleSheet, Image, Canvas } from '@react-pdf/renderer';

// Probando para hacer git push
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 'auto',
    //backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center' ,
    padding: '2rem'
  },
});

type PDFGeneratorProp = {
  id: number,
  adultname?: string
}

export const PDFGenerator = ({id}: PDFGeneratorProp) => {
  return (
    <PDFViewer style={{width: '100%', height: '90vh'}}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
              <QRCode value={`https://web-app-alzhaimer.vercel.app/profile/${id}`} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
