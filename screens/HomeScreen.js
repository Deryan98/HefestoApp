import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {SUBCATEGORIES, PRODUCTS} from '../data/dummy-data'
import ProductList from '../components/ProductList'


const HomeScreen = ({route, navigation}) => {
  //obtenemos el id de la subcategoria
  const subCatId = SUBCATEGORIES.find((subcat) => subcat.title === route.name).id;
  //filtra los productos x categoria
  const displayedProducts = PRODUCTS.filter((product)=>product.idSubCategory === subCatId);
  //console.log(displayedProducts);
  return (
    <ProductList listData={displayedProducts} navigation={navigation} />
  );
}

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});

export default HomeScreen;
