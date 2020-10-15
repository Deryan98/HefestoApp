import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ProductCard from "./ProductCard";

const ProductList = props => {
  
  const renderProductCard = itemData => {  
    return (
      <ProductCard
        title={itemData.item.name}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        /**
         * 
         onSelectProduct={() => {
           props.navigation.navigate({
             routeName: 'ProductBottomTabs',
             params: {
               productId: itemData.item.id,
               productTitle: itemData.item.title,
             }
           });
         }}
         */
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductCard}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default ProductList;
