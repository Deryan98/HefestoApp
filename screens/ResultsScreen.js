import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PRODUCTS} from '../data/dummy-data';
import ProductList from '../components/ProductList';
import Fuse from 'fuse.js';

const ResultsScreen = ({route}) => {
  const [result, setResults] = React.useState([]);
  console.log(route.params?.SearchText);
  return (
    <View style={styles.ResutlsScreenContainer}>
      <ProductList listData={PRODUCTS} navigation={navigation} />
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
