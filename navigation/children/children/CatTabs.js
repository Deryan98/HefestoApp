//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';
import { SubCatTabs } from './children/SubCatTabs';
//import {CATEGORIES} from '../../../data/dummy-data';
import { getAllCategories } from '../../../api/categories';

export const CatTabs = () => {
  const [CATEGORIES, setCategories] = useState([]);
  
  //creating the navigator
  const CatTab = createMaterialTopTabNavigator();

  useEffect(() => {
    try {
      getAllCategories()
        .then((response) => {
          let Data = Object.entries(response).map(([id, entry]) => {
            return { ...entry, id }
          });
          setCategories(Data);
          //setLoading(false);
          //console.log(response);
        });
    } catch (e) {
      console.log(e);
      setError(e);
    };
  });

  return (
    <CatTab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { flexDirection: 'row' },
        style: { backgroundColor: 'black' },

        showIcon: true,
        activeTintColor: 'chartreuse',
        inactiveTintColor: 'green',
      }}
      screenOptions={({ route }) => ({
        //configurando el icono para cada categoría.
        tabBarIcon: ({ color, size }) => {
          //variables a usar
          let iconName, catTitle, category;
          //obteniendo el nombre de la vista
          catTitle = route.name;
          //Encontrando categoría por su nombre
          category = CATEGORIES.find((cat) => cat.title === catTitle);
          //asignando el nombre del icono
          iconName = category.iconName;
          //retornando icono, con el nombre asociado a la categoría
          return (
            <Icon name={iconName} type="material" size={size} color={color} />
          );
        },
      })}>
      {/** Colocando las pantallas para cada categoría */}
      {CATEGORIES.map((category) => (
        <CatTab.Screen
          //definiendo id de la lista
          key={category.id}
          name={category.title}
          component={SubCatTabs}
        />
      ))}
    </CatTab.Navigator>
  );
};
