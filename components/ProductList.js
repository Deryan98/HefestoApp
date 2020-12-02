import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Detail} from '../data/dummy-data.js';
import ProductCard from './ProductCard';

const ProductList = (props) => {
  const renderProductCard = (itemData) => {
    if (itemData.item.image != '') {
      return (
        <ProductCard
          title={itemData.item.marca + itemData.item.modelo}
          price={itemData.item.price}
          image={itemData.item.image}
          onSelectProduct={() => {
            if (
              props.route.name == 'ProductsStoreScreen' ||
              props.route.name == 'WishList'
            ) {
              props.navigation.navigate('ProductDetail', {
                product: itemData.item,
                routename: props.route,
              });
            } else {
              props.navigation.navigate('ProductBottomTabs', {
                product: itemData.item,
                routename: props.route,
              });
            }
          }}
        />
      );
    }
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductCard}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default ProductList;
