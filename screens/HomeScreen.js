import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SUBCATEGORIES, PRODUCTS} from '../data/dummy-data';
import ProductList from '../components/ProductList';
//import {Details} from '../data/dummy-data';

import {getAllProducts} from '../api/products';

const HomeScreen = ({route, navigation}) => {

  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState();
  
  useEffect (() => {
    try {
        getAllProducts()
        .then((response) => {
          let Data = Object.entries(response).map(([id, entry]) => {
            return { ...entry, id }
          });
          setProducts(Data);
          setLoading(false);
          //console.log(response);
        });
      } catch (error) { 
        console.log(error);
        setError(error); 
      };
  });

  //obtenemos el id de la subcategoria
  const subCatId = SUBCATEGORIES.find((subcat) => subcat.title === route.name).id;
  //filtra los productos x categoria
  //const displayedProducts = Object.values(Details).filter(
  const displayedProducts = Products.filter(
    (product) => product.subCategory === subCatId,
  );
  //console.log(displayedProducts);
  return (
    <ProductList
      route={route}
      listData={displayedProducts}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
