import React, {useEffect, useState} from 'react';
//import {Details} from '../data/dummy-data';
import ProductList from '../components/ProductList';
import {getAllProducts} from '../api/products';

const CategoryMealScreen = ({route, navigation}) => {

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

/*
  const {Products} = route.params;
  const products = [];
*/
  Products.map((product) => {
    //Object.keys(Details).map((detail) => {
      Products.map((detail) => {
      if (product.id == detail.id) {
        products.push(detail);
      }
    });
  });

  // return <Text> Soy una pantalla</Text>;

  return (
    <ProductList route={route} listData={products} navigation={navigation} />
  );
};

export default CategoryMealScreen;
