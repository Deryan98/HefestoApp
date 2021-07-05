import React from 'react';
import {Header, Input, Icon} from 'react-native-elements';

export const HeaderBar = (props) => {
  return (
    <Header
      backgroundColor="#14213d"
      containerStyle={{
        marginTop: 5,
      }}
      leftComponent={
        <Icon
          name="arrow-left"
          type="material-community"
          color="white"
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
          placeholderTextColor="white"
          selectionColor="white"
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
              color="orange"
              iconStyle={{
                borderRadius: 30,
                backgroundColor: 'white',
              }}
              //onPress={() => searchingHandler(navigation)}
            />
          }
          inputStyle={{
            color: 'white',
            width: '100%',
          }}
        />
      }
    />
  );
};
