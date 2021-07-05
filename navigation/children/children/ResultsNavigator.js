import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ResultsScreen from '../../../screens/ResultsScreen';
import {Icon, Input} from 'react-native-elements';

export const ResultsNavigator = ({navigation}) => {
  const ResultsStack = createStackNavigator();

  const searchAgain = (navigation) => {
    navigation.goBack();
  };

  return (
    <ResultsStack.Navigator>
      <ResultsStack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{
          headerTintColor: 'white',
          title: (
            <Input
              placeholder="Buscar                                       "
              placeholderTextColor="white"
              //evita que se levante el teclado cuando hago onFocus
              showSoftInputOnFocus={false}
              onFocus={() => searchAgain(navigation)}
              leftIcon={
                <Icon
                  name="search"
                  type="material"
                  size={30}
                  color="orange"
                  backgroundColor="white"
                  iconStyle={{
                    borderRadius: 15,
                    width: '100%',
                  }}
                />
              }
              inputStyle={{
                color: 'white',
                alignContent: 'center',
              }}
              inputContainerStyle={{
                flexDirection: 'row',

                width: '100%',
                height: '100%',
              }}
            />
          ),
          headerStyle: {
            //color de la app bar
            backgroundColor: '#14213d',
          },
          //Color del titulo del header
          //headerTintColor: 'chartreuse',
          headerTitleStyle: {
            //Aplicando estilos al titulo del header
            fontWeight: 'normal',
            //color: 'chartreuse',
            height: '80%',
            width: '100%',
            backgroundColor: 'white',
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
    </ResultsStack.Navigator>
  );
};
