import React from 'react';
import ProductList from '../components/ProductList';
import {useSelector} from 'react-redux';

/*
function WishListScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Soy la pantalla Lista de Deseos</Text>
    </View>
  );
}
*/

const WishListScreen = ({navigation, route}) => {
  const wishProd = useSelector((state) => state.products.wishProducts);

  return (
    <ProductList route={'Home'} listData={wishProd} navigation={navigation} />
  );
};

/*WishListScreen.navigationOptions = {
  headerTitle: "Tu Wishlist"
};*/

export default WishListScreen;
