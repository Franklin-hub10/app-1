import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta'




export default function Pagina1Screen() {
  //console.log(datos);



  return (
    <View style={styles.container}>
      <Text>Pagina1Screen</Text>
      <FlatList
      
        data={datos}
        renderItem={({ item }) =>
          <Tarjeta informacion={item} 
        numColumns={2} /> 
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },


})