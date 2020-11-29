import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './children/HomeNavigator';
import SearchScreen from '../screens/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon, Input} from 'react-native-elements';

export const TestNavigator = ({navigation}) => {
  const TestStack = createStackNavigator();
  return (
    <NavigationContainer>
      <TestStack.Navigator>
        <TestStack.Screen
          name="SearchScreen"
          component={HomeNavigator}
          options={{
            headerTintColor: 'chartreuse',
            title: 'TiendaX',
            headerStyle: {
              //color de la app bar
              backgroundColor: 'black',
            },
            //Color del titulo del header
            //headerTintColor: 'chartreuse',
          }}
        />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};
