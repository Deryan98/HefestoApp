import React from 'react';
import {Header, Input, Icon, Text} from 'react-native-elements';

export const HeaderDetail = (props) => {
  //Obteniendo la pantalla de origen
  const screen = props.route.params?.routename;

  return (
    <Header
      backgroundColor="black"
      containerStyle={{
        marginTop: 5,
      }}
      leftComponent={
        <Icon
          name="arrow-left"
          type="material-community"
          color="chartreuse"
          // iconStyle={{
          //   borderRadius: 30,
          //   backgroundColor: 'chartreuse',
          // }}
          onPress={() => props.navigation.navigate(screen)}
        />
      }
      centerComponent={
        <Text
          style={{
            width: '100%',
            color: 'chartreuse',
            fontSize: 20,
            fontWeight: 'bold',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          Detalles
        </Text>
      }
      rightComponent={
        <Icon
          name="star-outline"
          size={30}
          type="material-community"
          color="chartreuse"
          onPress={() => props.handleStar()}
        />
      }
    />
  );
};
