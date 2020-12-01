import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../../../screens/MapScreen';
import ProductDetailScreen from '../../../screens/ProductDetailScreen';
import {Icon} from 'react-native-elements';

export const ProductBottomTabs = ({route}) => {
  const ProductBottomTab = createBottomTabNavigator();
  return (
    <ProductBottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'black',
        activeTintColor: 'chartreuse',
        inactiveBackgroundColor: 'black',
        inactiveTintColor: 'green',
      }}>
      <ProductBottomTab.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        initialParams={{...route.params}}
        options={{
          tabBarLabel: 'Detalles',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="hammer-wrench"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <ProductBottomTab.Screen
        name="ProductMap"
        component={MapScreen}
        initialParams={{...route.params}}
        options={{
          tabBarLabel: 'Tiendas',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home-map-marker"
              type="material-community"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </ProductBottomTab.Navigator>
  );
};
