import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon} from 'react-native-elements';

const SearchInput = () => {
  return (
    <View style={styles.textFields}>
      <Input
        placeholder="Buscar"
        rightIcon={
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
    marginTop: 15,
  },
  inputStyle: {
    color: '#FAFAFA',
    maxWidth: 175,
    marginBottom: -10,
  },
  inputContainerStyle: {
    width: '100%',
  },
});

export default SearchInput;
