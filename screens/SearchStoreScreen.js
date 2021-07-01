import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderBar} from '../components/HeaderBar';
import {Stores} from '../data/dummy-data';
import StoreList from '../components/StoreList';
import Fuse from 'fuse.js';

const SearchStoreScreen = ({navigation, route}) => {
  const [inputSearch, setInputSearch] = React.useState('');

  const handleKeyPress = (value) => {
    console.log(value);
    setInputSearch(value);
  };

  const fuse = new Fuse(Stores, {
    keys: ['name'],
    includeScore: true,
  });
  //console.log('fuse', fuse);
  //console.log(route.params?.SearchText);
  const results = fuse.search(inputSearch);

  //console.log('results', results);

  const StoreResults = results.map((result) => result.item);

  return (
    <>
      <HeaderBar
        navigation={navigation}
        inputSearch={inputSearch}
        handleKeyPress={handleKeyPress}
      />

      <Text>{console.log(inputSearch)}</Text>

      <StoreList
        route={route}
        listData={StoreResults}
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

export default SearchStoreScreen;