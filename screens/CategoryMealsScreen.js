import React from 'react';
import {Details} from '../data/dummy-data';
import ProductList from '../components/ProductList';

const CategoryMealScreen = ({route, navigation}) => {
  const {Products} = route.params;
  const products = [];

  Products.map((product) => {
    Details.map((detail) => {
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
