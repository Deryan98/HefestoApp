import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Stores} from '../data/dummy-data.js';
import StoreCard from './StoreCard';

const StoresList = (props) => {
  const renderProductCard = (itemData) => {
    if (itemData.item.logo != '') {
      return (
        <StoreCard
          name={itemData.item.name}
          logo={itemData.item.logo}
          onSelectStore={() => {
            if (
                props.route.name == 'SearchStoreScreen'
              ) {
                  props.navigation.navigate('StoreDetail', {
                  store: itemData.item,
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

export default StoresList;
