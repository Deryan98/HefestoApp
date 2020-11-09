import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon} from 'react-native-elements';

const SearchInput = () => {
  return (
    <View style={styles.textFields}>
      <Input
        placeholder="Buscar"
        leftIcon={
          <Icon name="search" type="material" size={30} color="white" />
        }
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFields: {
    flexDirection: 'row',
    width: '100%',
  },
  inputStyle: {
    color: '#FAFAFA',
  },
});

export default SearchInput;
