import React from 'react';
import {Icon} from 'react-native-elements';

const DrawerMenu = (props) => {
  return (
    <Icon
      name="menu"
      type="Entypo"
      size={30}
      color="white"
      onPress={props.onPress}
      containerStyle={{flexDirection: 'row', marginLeft: 10}}
    />
  );
};

export default DrawerMenu;
