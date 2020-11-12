import { useLinkProps } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Details } from '../data/dummy-data';



function ProductDetailScreen({ route }) {
  // useEffect(() => {
  //   console.log(route);
  // }, [route.params.productName]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: route.params?.product.image }}
        style={styles.photo} />
      <Text style={{ color: '#DFFF00', fontSize: 25, marginTop: 10, left: 60, fontFamily: 'georgia', fontWeight: 'bold', marginBottom: 15}}>{route.params?.product.marca} - {route.params?.product.modelo}</Text>
      <Text style={{ fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', color: 'white', left: 115 }}>Precio: {route.params?.product.price}</Text>
      <Text style={styles.description}>Marca: {route.params?.product.marca}</Text>
      <Text style={styles.description}>Modelo: {route.params?.product.modelo}</Text>
      <Text style={styles.description}>Sistema Operativo: {route.params?.product.sistema_operativo}</Text>
      <Text style={styles.description}>Memoria Interna: {route.params?.product.memoria}</Text>
      <Text style={styles.description}>Caracteristicas: {route.params?.product.caracteristicas}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 24
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 35
  },
  photo: {
    width: '100%',
    marginBottom: 30,
    height: 200,
    borderRadius: 5
  }

});

export default ProductDetailScreen;

