//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import {Details} from '../data/dummy-data';
import ProductList from '../components/ProductList';
import Fuse from 'fuse.js';
import { getAllProducts } from '../api/products';

const ResultsScreen = ({ route }) => {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    try {
      getAllProducts()
        .then((response) => {
          let Data = Object.entries(response).map(([id, entry]) => {
            return { ...entry, id }
          });
          setProducts(Data);
        });
    } catch (error) {
      console.log(error);
      setError(error);
    };
  });

  const [result, setResults] = React.useState([]);
  console.log(route.params?.SearchText);
  return (
    <View style={styles.ResutlsScreenContainer}>
      <ProductList listData={Products} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  ResutlsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultsScreen;
