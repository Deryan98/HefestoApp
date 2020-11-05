import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
          component={SearchScreen}
          options={{
            headerTintColor: 'chartreuse',
            title: (
              <Input
                placeholder="Buscar                                       "
                placeholderTextColor="yellowgreen"
                autoFocus={true}
                rightIcon={
                  <Icon
                    name="search"
                    type="material"
                    size={35}
                    color="green"
                    iconStyle={{
                      borderRadius: 30,
                      backgroundColor: 'chartreuse',
                    }}
                    onPress={() => searchingHandler(navigation)}
                  />
                }
                inputStyle={{
                  color: 'chartreuse',
                }}
                inputContainerStyle={{
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  marginLeft: 0,
                }}
              />
            ),
            headerStyle: {
              //color de la app bar
              backgroundColor: 'black',
            },
            //Color del titulo del header
            //headerTintColor: 'chartreuse',
            headerTitleStyle: {
              //Aplicando estilos al titulo del header
              fontWeight: 'normal',
              //color: 'chartreuse',
              height: '80%',
              width: '100%',
              backgroundColor: 'green',
              borderRadius: 30,
              margin: 5,
              marginLeft: -15,
            },
            headerTitleContainerStyle: {
              //backgroundColor: 'green',

              height: '100%',
              width: '75%',
            },
          }}
        />
      </TestStack.Navigator>
    </NavigationContainer>
  );
};
