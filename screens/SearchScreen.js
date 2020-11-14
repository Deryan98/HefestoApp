import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderBar} from '../components/HeaderBar';
import {PRODUCTS, Details} from '../data/dummy-data';
import ProductList from '../components/ProductList';
import Fuse from 'fuse.js';

const SearchScreen = ({navigation, route}) => {
  const [inputSearch, setInputSearch] = React.useState('');

  const handleKeyPress = (value) => {
    console.log(value);
    setInputSearch(value);
  };

  const fuse = new Fuse(Details, {
    keys: ['marca', 'modelo', 'price'],
    includeScore: true,
  });
  //console.log('fuse', fuse);
  //console.log(route.params?.SearchText);
  const results = fuse.search(inputSearch);

  //console.log('results', results);

  const productResults = results.map((result) => result.item);

  return (
    <>
      <HeaderBar
        navigation={navigation}
        inputSearch={inputSearch}
        handleKeyPress={handleKeyPress}
      />

      <Text>{console.log(inputSearch)}</Text>

      <ProductList
        route={route}
        listData={productResults}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  SearchScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;
