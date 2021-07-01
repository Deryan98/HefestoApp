import { useLinkProps } from '@react-navigation/native';
import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
//import {HeaderBar} from '../components/HeaderBar';
import { HeaderDetail } from '../components/HeaderDetail';
import {Stores} from '../data/dummy-data';
import StoreProductInfoList from '../components/StoreProductInfoList';

function StoreDetailScreen({ route, navigation }) {
  return (
    <>
      <HeaderDetail
        navigation={navigation}
        route={route}
      />
      <View style={styles.container}>
        <Image
            source={{ uri: route.params?.store.logo }}
            style={styles.photo}
          />
          <Text style={styles.productName}>
            {route.params?.store.name}
          </Text>
        <ScrollView style={{ flex: 0.3 }} contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.productName}>
            {route.params?.store.description}
          </Text>          
        </ScrollView>
        <StoreProductInfoList listData={route.params?.store.Products} navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 24,
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 35,
  },
  photo: {
    width: '100%',
    marginBottom: 30,
    height: 200,
    borderRadius: 5,
  },
  productName: {
    color: '#DFFF00',
    fontSize: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'georgia',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productPrice: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
    left: 115,
  },
});

export default StoreDetailScreen;