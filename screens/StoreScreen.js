import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../data/dummy-data';
import StoreList from '../components/StoreList';


const StoreScreen = ({route, navigation}) => {
  //obtenemos el id de la subcategoria
  const stores = Stores;
  return (
    <StoreList
      route={route}
      listData={stores}
      navigation={navigation}
    />
  );
};

const styles = StyleSheet.create({
  StoreScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StoreScreen;