import {useLinkProps} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
//import {HeaderBar} from '../components/HeaderBar';
import {HeaderDetail} from '../components/HeaderDetail';
import {Details} from '../data/dummy-data';

function ProductDetailScreen({route, navigation}) {
  const handleStar = () => {
    console.log('Presionaste Favoritos');
  };
  return (
    <>
      <HeaderDetail
        navigation={navigation}
        route={route}
        handleStar={handleStar}
      />
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{uri: route.params?.product.image}}
            style={styles.photo}
          />

          <Text style={styles.productName}>
            {route.params?.product.marca} - {route.params?.product.modelo}
          </Text>

          <Text style={styles.productPrice}>
            Precio: {route.params?.product.price}
          </Text>
          <Text style={styles.description}>
            Marca: {route.params?.product.marca}
          </Text>
          <Text style={styles.description}>
            Modelo: {route.params?.product.modelo}
          </Text>
          <Text style={styles.description}>
            Sistema Operativo: {route.params?.product.sistema_operativo}
          </Text>
          <Text style={styles.description}>
            Memoria Interna: {route.params?.product.memoria}
          </Text>
          <Text style={styles.description}>
            Caracteristicas: {route.params?.product.caracteristicas}
          </Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 24,
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 35,
  },
  photo: {
    width: '100%',
    marginBottom: 30,
    height: 200,
    borderRadius: 5,
  },
  productName: {
    color: '#DFFF00',
    fontSize: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'georgia',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productPrice: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    left: 115,
  },
});

export default ProductDetailScreen;
