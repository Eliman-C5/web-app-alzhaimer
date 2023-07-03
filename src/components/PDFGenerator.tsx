import React from 'react'
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
  users: any
  adultname?: string
}

export const PDFGenerator = ({id, users}: PDFGeneratorProp) => {
  return (
    <PDFViewer style={{width: '100%', height: '90vh'}}>
      <Document>
        {
          users.map((user: any) => (
            user.id === id && (
              <Page size="A4" style={styles.page} key={user.id}>
                <View>
                  <Text style={{marginTop:"8px", marginBottom: "8px"}}>
                    Este es {user.adultname}, de género {user.genre} y de {user.adultage} años de edad
                  </Text>
                  <img src={user.image} style={{width: '500px', height: '500px'}} />
                  {/* <Image 
                    src={user.image}
                    style={{width: '500px', height: '500px'}}
                  /> */}
                  <Text style={{marginTop:"8px", marginBottom: "8px"}}>Cuenta con patologías? {user.illnes}</Text>
                  <Text style={{marginTop:"8px", marginBottom: "8px"}}>La dirección en la que vive es: {user.adultAddress}</Text>
                  <Text style={{marginTop:"8px", marginBottom: "8px"}}>Su responsable es {user.username} y el número de contacto es {user.userphone}</Text>
                </View>
              </Page>
            )
          ))
        }
      </Document>
    </PDFViewer>
  )
}
