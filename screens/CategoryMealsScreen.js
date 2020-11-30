import React from 'react';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';
import {Franchisies} from '../data/dummy-data';
import ProductList from '../components/ProductList';

const CategoryMealScreen = ({route, navigation}) => {
  const {Products} = route.params;

  // const Products = [];
  // Franchisies.map((franchisie) => {
  //   franchisie.Stores.map((store) => {
  //     store.Subcategories.map((Subcategorie) => {
  //       Subcategorie.Products.map((Product) => {
  //         Products.push(Product);
  //       });
  //     });
  //   });
  // });

  console.log(route);

  // return <Text> Soy una pantalla</Text>;

  return (
    <ProductList route={route} listData={Products} navigation={navigation} />
  );
};

export default CategoryMealScreen;
