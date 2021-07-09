import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Slider from '@react-native-community/slider';
import { getDistance } from 'geolib';
import Modal from 'react-native-modal';
import ShopCards from '../cards/shopsCards';
import { Icon, Button } from 'react-native-elements';
//import {Stores} from '../data/dummy-data';

import { getAllStores } from '../api/store';

function MapScreen({ route, navigation }) {

  const { product } = route.params;
  const [Stores, setStores] = useState([]);
  const [shops, setShops] = useState([]);
  const [userCoords, setUserCoords] = useState([]);
  const [modal, setModal] = useState(false);
  const [radiusAux, setRadiusAux] = useState(1);
  const [radiusToShow, setRadiusToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperState, setSwiperState] = useState(0);
  const [radius, setRadius] = useState(2000);
  const [selectedShops, setSelectedShops] = useState([]);
  const mapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,

    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    try {
      getAllStores()
        .then((response) => {
          let Data = Object.entries(response).map(([id, entry]) => {
            return { ...entry, id }
          })
          let stores = [];
          //setStores(Data);
          //setLoading(false);
          Data.map((store) => {
            //console.log(product.Stores);
            Object.values(product.Stores).map((id) => {
              //console.log('Tienda id: ' + store.id + 'Tienda producto id: ' + id);
              if (store.id == id) {
                stores.push(store);
              }
            });
          });
          setStores(stores[0]);
          setShops(stores[0]);
          setUserCoords(stores[0]);
        });
    } catch (error) {
      console.log(error);
      setError(error);
    };
  }, [shops, userCoords, Stores]);

  //console.log("userCoords-----", userCoords)
  //console.log("shops-----", shops)

  // console.log('StoresASLDKNFKJANSDKF------------', Stores);
  /*
  Object.values(Stores).map((store) => {
    //console.log(Object.keys(product.Stores));
    
    Object.values(product.Stores).map((id) => {
      if (store.id == id) {
        stores.push(store);
      }
    });
  });*/
  //console.log('Tiendas: ');
  //console.log(stores);




  // console.log('shops--------', shops);
  // console.log('StoresASLDKNFKJANSDKF------------', Stores);

  useEffect(() => {
    requestPermissions();
    getCurrentLocation();
  }, []);

  useEffect(() => {
    console.log("Latitude?------->", userCoords.latitude);

    if (userCoords && userCoords.latitude) {
      getNearlyShops();
      //setDefaultValues();
      //console.log("SHOPS----------", userCoords);
      let array = shops.map((shop) => {
        console.log("SHOP------>", shop);
        console.log("COOOORDSSSSSSSS", shop.coords);
        ({
          ...shop,
          isSelected: false,
          distance: getDistance(userCoords, shop.coords),
        })
      });
      setShops(array);
    }
  }, [userCoords, radius]);

  useEffect(() => {
    if (selectedShops.length != 0) {
      handleSwiperIndexChange(0);
    }
  }, [selectedShops]);

  const setDefaultValues = () => {
    console.log("SHOPS----------", userCoords);
    let array = shops.map((shop) => {
      console.log("SHOP------>", shop);
      console.log("COOOORDSSSSSSSS", shop.coords);
      ({
        ...shop,
        isSelected: false,
        distance: getDistance(userCoords, shop.coords),
      })
    });
    setShops(array);
  };

  const getNearlyShops = () => {
    let nearShops = [];

    let userCoordsLatLon = {
      latitude: userCoords.latitude,
      longitude: userCoords.longitude,
    };
    console.log("SHOPS----------", shops);
    shops.forEach((store) => {
      let distance = getDistance(store.coords, userCoordsLatLon);
      console.log("Store coords----------------", store.coords);
      if (distance <= radius) {
        nearShops.push({
          ...store,
          isSelected: false,
          distance: getDistance(userCoords, store.coords),
        });
      }
    });
    nearShops = nearShops.sort((a, b) => a.distance - b.distance);

    setSelectedShops(nearShops);
    return nearShops;
  };

  const requestPermissions = () => {
    //Geolocation.requestAuthorization();
  };

  const handleSuccessRequest = (response) => {
    setUserCoords({
      latitude: response.coords.latitude,
      longitude: response.coords.longitude,
    });
    mapRef.current.animateToRegion(
      {
        latitude: response.coords.latitude,
        longitude: response.coords.longitude,

        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      300,
    );
  };

  const handleFailedRequest = (response) => { };

  const getCurrentLocation = async () => {
    try {
      const options = {
        enableHighAccuracy: false,
        timeout: 100000,
        maximumAge: 100000,
      };

      Geolocation.getCurrentPosition(
        handleSuccessRequest,
        handleFailedRequest,
        options,
      );
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleRegionChange = (response) => {
    console.log('value', response);
  };

  const renderMarkers = () => {
    return Object.entries(shops).map((store, index) => {
      let storeAux = [];
      if (store[0] == "coords") {
        storeAux.push(store[1]);
        return (
          <Circle
            key={index}
            style={{ zIndex: 10 }}
            center={storeAux[0]}
            radius={200}
            fillColor={
              store.isSelected
                ? 'rgba(255, 162, 112, 0.5)'
                : 'rgba(158, 158, 158, 0.5)'
            }
            strokeColor={
              store.isSelected
                ? 'rgba(255, 162, 112, 1)'
                : 'rgba(158, 158, 158, 1)'
            }
          />
        );

      }
    });
  };

  const renderPerimeter = () => {
    if (userCoords && userCoords.longitude) {
      console.log("Render Perimeter:", userCoords)
      return (
        <Circle
          center={userCoords}
          radius={radius}
          strokeColor={'#7fff00'}
          fillColor={'rgba(127,255,0, 0.5)'}
        />
      );
    }
  };

  const handleMapPress = ({ nativeEvent }) => {
    const mapPressedCoordinate = nativeEvent.coordinate;

    let userCoordsLatLon = {
      latitude: userCoords.latitude,
      longitude: userCoords.longitude,
    };

    let isInside = getDistance(mapPressedCoordinate, userCoordsLatLon);

    if (isInside <= radius) {
      let propertiesToSet = [];
      let selected = getNearlyShops();
      shops.forEach((shop) => {
        let isInside = getDistance(mapPressedCoordinate, shop.coords);

        if (isInside <= 200) {
          mapRef.current.animateToRegion(
            {
              latitude: shop.coords.latitude,
              longitude: shop.coords.longitude,
              latitudeDelta: 0.0422,
              longitudeDelta: 0.0421,
            },
            300,
          );
          // aqui
          let updatedShops = selected.filter((sp) => sp.name !== shop.name);
          //console.log("sp.name", sp.name, "shop.name", shop.name);
          updatedShops.unshift(shop);
          setSwiperState(0);
          setSelectedShops(updatedShops);
        }
      });
    } else {
      let shopsToInsert = [];
      shops.forEach((shop) => {
        let isInside = getDistance(mapPressedCoordinate, shop.coords);
        //console.log("latitude: ", shop.coords.latitude, "longitude: ", shop.coords.longitude);
        if (isInside <= 200) {
          mapRef.current.animateToRegion(
            {
              latitude: shop.coords.latitude,
              longitude: shop.coords.longitude,
              latitudeDelta: 0.0422,
              longitudeDelta: 0.0421,
            },
            300,
          );
          // aqui

          shopsToInsert.push(shop);

          setSwiperState(0);
          setSelectedShops(shopsToInsert);
        }
      });
    }
  };
  //HAY QUE HACER CONSOLE LOG DE LAS VARIABLES QUE MANEJA LA LINEA 280
  const handlePropertyChange = (currentName) => {
    console.longitude("Shops-----> ", shop);
    const updatedShops = shops.map((shop, index) => {
      if (shop.name === currentName) {
        return { ...shop, isSelected: true };
      }
      return { ...shop, isSelected: false };
    });
    console.log('updatedShops--->', updatedShops);


    setShops(updatedShops);


  };
  //HAY QUE HACER CONSOLE LOG DE LAS VARIABLES QUE MANEJA LA LINEA 291 
  const handleSwiperIndexChange = (currentIndex) => {
    console.log("SelectedShops------------------", selectedShops);
    const moveToShop = selectedShops[currentIndex];
    console.log("MoveToShop------------------", moveToShop);
    handlePropertyChange(moveToShop.name);
    setCurrentIndex(currentIndex);

    setSwiperState(1);

    mapRef.current.animateToRegion(
      {
        latitude: moveToShop.coords.latitude,
        longitude: moveToShop.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      },
      300,
    );
  };

  const handleOpenModal = () => {
    setRadiusAux(radius / 1000);
    setRadiusToShow(radius / 1000);
    setModal(true);
  };

  const handleRadius = () => {
    setRadius(Math.floor(radiusAux) * 1000);
    setModal(false);
  };

  return (


    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        showsUserLocation
        onPress={handleMapPress}
        initialRegion={currentLocation}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={handleRegionChange}
        style={{ flex: 1 }}>
        {renderPerimeter()}
        {renderMarkers()}
      </MapView>
      <TouchableOpacity
        onPress={() => handleOpenModal()}
        style={{ position: 'absolute', top: 30, right: 20, zIndex: 10 }}>
        <Icon type="font-awesome-5" name="pen" reverse />
      </TouchableOpacity>
      <ShopCards
        swiperState={swiperState}
        currentIndex={currentIndex}
        selectedShops={selectedShops}
        handleSwiperIndexChange={(index) => handleSwiperIndexChange(index)}
        navigation={navigation}
      />
      <Modal
        isVisible={modal}
        onBackButtonPress={() => setModal(false)}
        onBackdropPress={() => setModal(false)}>
        <View
          style={{
            backgroundColor: 'white',

            borderRadius: 5,
            padding: 24,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Selecciona un rango
          </Text>
          <Slider
            value={radiusToShow}
            style={{ width: '100%', height: 40 }}
            onValueChange={(value) => setRadiusAux(value)}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor="#7fff00"
            maximumTrackTintColor="#000000"
          />
          <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 10 }}>
            {Math.floor(radiusAux)} Km
          </Text>
          <Button onPress={handleRadius} title="Modificar" />
        </View>
      </Modal>
    </View>
  );

}

export default MapScreen;