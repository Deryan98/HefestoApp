import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
//importing screens
import HomeScreen from './screens/HomeScreen';
import WishListScreen from './screens/WishListScreen';
//importing custom components
import DrawerMenu from './components/DrawerMenu';
import SearchInput from './components/SearchInput';
//importing data
import {CATEGORIES, SUBCATEGORIES} from './data/dummy-data';

const SubCatTab = createMaterialTopTabNavigator();

function SubCatTabs({route}) {
  //obteniendo el id de la categoría
  const categoryId = CATEGORIES.find((category)=> route.name === category.title).id;
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
        let scategory = SUBCATEGORIES.find((subCat) => subCat.title === route.name);
        //retornando icono, con el nombre asociado a la categoría
        return (
          <Icon name={scategory.iconName} type={scategory.iconType} size={size} color={color}  />
        );
      },
    })}
    >
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
}

const CatTab = createMaterialTopTabNavigator();

function CatTabs() {
  return (
    <CatTab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        tabStyle: {flexDirection: 'row'},
        style: {backgroundColor: 'black'},
        
        showIcon: true,
        activeTintColor: 'chartreuse',
        inactiveTintColor: 'green',
      }}
      screenOptions={({route}) => ({
        
        //configurando el icono para cada categoría.
        tabBarIcon: ({color, size}) => {
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
}

//Creando Home Navigator de tipo Stack
const HomeStack = createStackNavigator();

function HomeNavigator({navigation}) {
  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Hefesto"
        component={CatTabs}
        options={{
          title: 'Hefesto App',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            marginLeft: -20,
          },
          headerLeft: () => (
            <DrawerMenu
              onPress={() => {
                drawerMenuHandler(navigation);
              }}
            />
          ),
          headerRight: () => <SearchInput />,
        }}
      />
    </HomeStack.Navigator>
  );
}

//Creando WishList Navigator de tipo Stack
const WishListStack = createStackNavigator();

//parámetro {navigation} implicito que se pasa entre navegadores
function WishListNavigator({navigation}) {
  //metodo para disparar el icono menu
  const drawerMenuHandler = (navigation) => {
    navigation.openDrawer();
  };
  return (
    <WishListStack.Navigator>
      <WishListStack.Screen
        name="Lista de Deseos"
        component={WishListScreen}
        options={{
          //definiendo el titulo de la app
          title: 'Hefesto App',
          headerStyle: {
            //color de la app bar
            backgroundColor: 'black',
          },
          //Color del titulo del header
          headerTintColor: 'white',
          headerTitleStyle: {
            //Aplicando estilos al titulo del header
            fontWeight: 'normal',
            marginLeft: -20,
          },
          headerLeft: () => (
            //colocando icono personalizado a la izquierda del header
            <DrawerMenu
              //evento para cuando se presione el icono menu
              onPress={() => {
                //Metodo para abrir el DrawerMenu
                drawerMenuHandler(navigation);
              }}
            />
          ),
          headerRight: () => <SearchInput />,
        }}
      />
    </WishListStack.Navigator>
  );
}

//Creando el DrawerNavigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <> 
    {/** Definiendo contenedor padre de navegadores */}
    <NavigationContainer>
      {/** Drawer Navigator para mostrar pantallas principales */}
      <Drawer.Navigator initialRouteName="Home">
        {/** Cargando pantalla principal */}
        <Drawer.Screen
          //definiendo nombre de ruta
          name="Home"
          //componente a cargar en la pantalla
          component={HomeNavigator}
          
          options={{
            //nombre con el que aparece en el Drawer Menu
            title: 'Pantalla Home',
          }}
        />
        {/** Cargando pantalla lista de deseos */}
        <Drawer.Screen name="WishList" component={WishListNavigator} options={{
            //nombre con el que aparece en el Drawer Menu
            title: 'Lista de deseos',
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
