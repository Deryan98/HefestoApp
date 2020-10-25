import * as React from 'react';
import firestore from '@react-native-firebase/firestore';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
//importing screens
import HomeScreen from './screens/HomeScreen';
import WishListScreen from './screens/WishListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import MapScreen from './screens/MapScreen';
//importing custom components
import DrawerMenu from './components/DrawerMenu';
import SearchIcon from './components/SearchIcon';
//importing data
import {CATEGORIES, SUBCATEGORIES} from './data/dummy-data';
import Category from './models/Category'
import SubCategory from './models/SubCategory'
//import {Categories, SubCategories} from './firebase/Api';



const SubCatTab = createMaterialTopTabNavigator();

const SubCategories = firestore().collection('SubCategories');

function SubCatTabs({route}) {

  const [subcategories, setSubCategories] = React.useState([]);
  
  const [initialize, setInitialize] = React.useState(true);
  const SUBCATGORIES = [];

 
  console.log(route.params?.categoryId);
  
  React.useEffect(() => {
    // if(initialize){
      
      console.log('Estoy en el use Effect')
      SubCategories
            .where('Category', '==', '/SubCategories/c1')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                console.log('Estoy iterando el querySnapshot')
                SUBCATGORIES.push(new SubCategory(documentSnapshot.id, 
                  documentSnapshot.data().title, documentSnapshot.data().iconName, 
                  documentSnapshot.data().iconType), route.name);
              });
              setSubCategories(SUBCATGORIES)
            })
            .catch((error)=>{
              console.log("Api call error");
              alert(error.message);
           });
          //  setInitialize(false);
    // }  
  },[]);

  let Screens = [];
  console.log(subcategories);

   if(subcategories.length != 0){
     console.log('Entre al if')
      //console.log(categories),
      subcategories.map((category) => (
        console.log('Muestro desde el server'),
        //console.log(category),
        Screens.push(<CatTab.Screen
          //definiendo id de la lista
          key={subcategories.id}
          name={subcategories.title}
          component={HomeScreen}
        />)
      ))
    } 
    else {
      console.log('Entre al else')
      //obteniendo el id de la categoría
      const categoryId = CATEGORIES.find((category)=> route.name === category.title).id;
      
      SUBCATEGORIES.filter((subcat) => subcat.idCategory === categoryId).map(
        (filteredSubCat) => (
          Screens.push(<SubCatTab.Screen
            key={filteredSubCat.id}
            name={filteredSubCat.title}
            component={HomeScreen}
          />)
        )
      )
    }

    //const categoryId = CATEGORIES.find((category)=> route.name === category.title).id;
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
      {
        Screens
      }
      
    </SubCatTab.Navigator>
  );
}

const CatTab = createMaterialTopTabNavigator();

const Categories = firestore().collection('Categories');

const  CatTabs = () => {

  const [categories, setCategories] = React.useState([]);
  
  const [initialize, setInitialize] = React.useState(true);
  const CATGORIES = [];

  React.useEffect(() => {
    // if(initialize){
       Categories
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                CATGORIES.push(new Category(documentSnapshot.id, documentSnapshot.data().title, documentSnapshot.data().iconName));
              });
              setCategories(CATGORIES)
            })
            .catch((error)=>{
              console.log("Api call error");
              alert(error.message);
           });
          //  setInitialize(false);
    // }  
  },[]);

  let Screens = [];
    
   if(categories.length != 0){
      //console.log(categories),
      categories.map((category) => (
        //console.log('Muestro desde el server'),
        //console.log(category),
        Screens.push(<CatTab.Screen
          //definiendo id de la lista
          key={category.id}
          name={category.title}
          component={SubCatTabs}
          initialParams={{categoryId: category.id}}
        />)
      ))
    } 
    else {
      CATEGORIES.map((category) => (
        //console.log('Muestro desde Local'),
             
        Screens.push(<CatTab.Screen
          //definiendo id de la lista
          key={category.id}
          name={category.title}
          component={SubCatTabs}
        />)
      )) 
    }

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
          //console.log('log1: ')
          //console.log(catTitle)
          //Encontrando categoría por su nombre
          
          category = CATEGORIES.find((cat) => cat.title === catTitle);

          //console.log(category);
          //asignando el nombre del icono
          //console.log(category.iconName);
          iconName = category.iconName;
          //retornando icono, con el nombre asociado a la categoría
          return (
            <Icon name={iconName} type="material" size={size} color={color} />
          );
        },
      })}>
        
      {Screens}
      
    </CatTab.Navigator>
  );
}

const ProductBottomTab = createBottomTabNavigator();

function ProductBottomTabs ({route})  {
  return(
    <ProductBottomTab.Navigator>
      <ProductBottomTab.Screen name="ProductDetail" component={ProductDetailScreen} initialParams={{...route.params}}/>
      <ProductBottomTab.Screen name="ProductMap" component={MapScreen} />
    </ProductBottomTab.Navigator>
  )
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
          headerRight: () => <SearchIcon />
        }}
      />
      <HomeStack.Screen
        name="ProductBottomTabs"
        component={ProductBottomTabs} />
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
        name="WishList"
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
          headerRight: () => <SearchIcon />
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
