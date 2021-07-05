import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapStoreScreen from '../../../screens/MapStoreScreen';
import StoreDetailScreen from '../../../screens/StoreDetailScreen';
import {Icon} from 'react-native-elements';

export const StoreBottomTabs = ({route}) => {
  const StoreBottomTab = createBottomTabNavigator();
  return (
    <StoreBottomTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#14213d',
        activeTintColor: 'orange',
        inactiveBackgroundColor: '#14213d',
        inactiveTintColor: 'white',
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
        name="StoreLocalitationMap"
        component={MapStoreScreen}
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
