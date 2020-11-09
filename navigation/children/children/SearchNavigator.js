import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../../../screens/SearchScreen';
import {Icon, Input, SearchBar} from 'react-native-elements';

export const SearchNavigator = ({navigation}) => {
  const SearchStack = createStackNavigator();

  const searchingHandler = (navigation) => {
    navigation.navigate('ResultsScreen');
  };

  return (
    <SearchStack.Screen
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
                size={30}
                color="green"
                backgroundColor="chartreuse"
                iconStyle={{
                  borderRadius: 13,
                }}
                onPress={() => searchingHandler(navigation)}
              />
            }
            inputStyle={{
              color: 'chartreuse',
              alignContent: 'center',
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
  );
};
