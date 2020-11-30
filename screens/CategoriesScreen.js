import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Franchisies} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({route, navigation}) => {
  const renderGridItem = (itemData) => {
    const Products = [];
    itemData.item.Products.map((Product) => {
      Products.push(Product);
    });
    //console.log(Products);
    console.log(navigation);
    return (
      <CategoryGridTile
        title={itemData.item.name}
        color={itemData.item.color}
        iconName={itemData.item.icon}
        iconType={itemData.item.iconType}
        onSelect={() => {
          navigation.navigate(
            'ProductsStoreScreen',

            {
              Products: Products,
            },
          );
        }}
      />
    );
  };

  const Subcategories = [];
  Franchisies.map((franchisie) => {
    franchisie.Stores.map((store) => {
      store.Subcategories.map((Subcategorie) => {
        Subcategories.push(Subcategorie);
      });
    });
  });

  console.log(Subcategories);

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={Subcategories}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
