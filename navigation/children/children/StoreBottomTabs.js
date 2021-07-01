import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../../../screens/MapScreen';
import StoreDetailScreen from '../../../screens/StoreDetailScreen';
import {Icon} from 'react-native-elements';

export const StoreBottomTabs = ({route}) => {
  const StoreBottomTab = createBottomTabNavigator();
  return (
    <StoreBottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'black',
        activeTintColor: 'chartreuse',
        inactiveBackgroundColor: 'black',
        inactiveTintColor: 'green',
      }}>
      <StoreBottomTab.Screen
        name="StoreDetail"
        component={StoreDetailScreen}
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
      <StoreBottomTab.Screen
        name="StoreMap"
        component={MapScreen}
        initialParams={{...route.params}}
        options={{
          tabBarLabel: 'Ubicacion',
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
    </StoreBottomTab.Navigator>
  );
};
