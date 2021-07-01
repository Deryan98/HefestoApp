import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stores} from '../data/dummy-data';
import StoreList from '../components/StoreList';
import Fuse from 'fuse.js';

const ResultsStoreScreen = ({route}) => {
  const [result, setResults] = React.useState([]);
  console.log(route.params?.SearchText);
  return (
    <View style={styles.ResutlsScreenContainer}>
      <StoreList listData={Stores} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  ResutlsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ResultsStoreScreen;
