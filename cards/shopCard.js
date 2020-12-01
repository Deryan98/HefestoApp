import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: '#7fff00',
  },
  shopName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  shopDescription: {},
  leftContainer: {width: '30%'},
  rightContainer: {width: '70%', flexDirection: 'column'},
});

const ShopCard = ({shop, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('StoreNavigator', {Store: shop})}>
      <View style={styles.leftContainer}>
        <Avatar source={{uri: shop.logo}} rounded size="large" />
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.shopName, styles.text]}>{shop.name}</Text>
        <Text style={[styles.shopDescription, styles.text]}>
          Correo: {shop.correo}
        </Text>
        <Text style={[styles.shopDescription, styles.text]}>
          Telefono: {shop.telefono}
        </Text>
        <Text style={[styles.shopDescription, styles.text]}>
          Distancia: {shop.distance / 1000} km
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard;
