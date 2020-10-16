import React, {useEffect} from 'react';
import {View, Text} from 'react-native';


function ProductDetailScreen({route}) {
  useEffect(() => {
    console.log(route);
  }, [route.params.productName]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.params?.productName}</Text>
    </View>
  );
}

export default ProductDetailScreen;
