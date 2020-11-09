import React from 'react';
import {Header, Input, Icon} from 'react-native-elements';

export const HeaderBar = (props) => {
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
          onPress={() => props.navigation.goBack()}
        />
      }
      centerComponent={
        <Input
          placeholder="Buscar"
          placeholderTextColor="yellowgreen"
          selectionColor="yellowgreen"
          autoFocus={true}
          //defaultValue={props.inputSearch}
          //onChangeText={(text) => setInputSearch(text)}
          //onKeyPress={(text) => setInputSearch(text)}
          onChangeText={(value) => props.handleKeyPress(value)}
          rightIcon={
            <Icon
              name="search"
              type="material"
              size={30}
              color="green"
              iconStyle={{
                borderRadius: 30,
                backgroundColor: 'chartreuse',
              }}
              //onPress={() => searchingHandler(navigation)}
            />
          }
          inputStyle={{
            color: 'chartreuse',
            width: '100%',
          }}
        />
      }
    />
  );
};
