import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../../../../screens/HomeScreen';
import {Icon} from 'react-native-elements';
import {CATEGORIES, SUBCATEGORIES} from '../../../../data/dummy-data';

export const SubCatTabs = ({route}) => {
  const SubCatTab = createMaterialTopTabNavigator();
  //obteniendo el id de la categoría
  const categoryId = CATEGORIES.find(
    (category) => route.name === category.title,
  ).id;
  //console.log(categoryId);
  return (
    <SubCatTab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        tabStyle: {flexDirection: 'row'},
        style: {backgroundColor: 'black'},
        scrollEnabled: true,
        showIcon: true,
        activeTintColor: 'yellow',
        inactiveTintColor: 'cadetblue',
      }}
      screenOptions={({route}) => ({
        //configurando el icono para cada categoría.
        tabBarIcon: ({color, size}) => {
          //Encontrando la Subcategoría
          let scategory = SUBCATEGORIES.find(
            (subCat) => subCat.title === route.name,
          );
          //retornando icono, con el nombre asociado a la categoría
          return (
            <Icon
              name={scategory.iconName}
              type={scategory.iconType}
              size={size}
              color={color}
            />
          );
        },
      })}>
      {/** Iterando las subcategorias a partir de su Id de categoria */}
      {SUBCATEGORIES.filter((subcat) => subcat.idCategory === categoryId).map(
        (filteredSubCat) => (
          <SubCatTab.Screen
            key={filteredSubCat.id}
            name={filteredSubCat.title}
            component={HomeScreen}
          />
        ),
      )}
      {/**
      <SubCatTab.Screen name="Basica" component={HomeScreen} />
       */}
    </SubCatTab.Navigator>
  );
};
