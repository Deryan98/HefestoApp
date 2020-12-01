import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Slider from '@react-native-community/slider';
import {getDistance} from 'geolib';
import Modal from 'react-native-modal';
import ShopCards from '../cards/shopsCards';
import {Icon, Button} from 'react-native-elements';
import {Stores} from '../data/dummy-data';

// const stores = [
//   {
//     name: 'Tienda #1',
//     coords: {
//       latitude: 13.691409625071365,
//       longitude: -89.26434366032481,
//     },
//     isSelected: false,
//   },
//   {
//     name: 'Tienda #2',
//     coords: {
//       latitude: 13.706465262797082,
//       longitude: -89.26884407177567,
//     },
//     isSelected: false,
//   },
//   {
//     name: 'Tienda #3',
//     coords: {
//       latitude: 13.700954529189467,
//       longitude: -89.29187318310142,
//     },
//     isSelected: false,
//   },
//   {
//     name: 'Tienda #4',
//     coords: {
//       latitude: 13.677929418601224,
//       longitude: -89.2874408327043,
//     },
//     isSelected: false,
//   },
//   {
//     name: 'Tienda #5',
//     coords: {
//       latitude: 13.680839157572201,
//       longitude: -89.27240939810872,
//     },
//     isSelected: false,
//   },
// ];

function MapScreen({route, navigation}) {
  const {product} = route.params;

  //console.log(product.Stores);
  const stores = [];
  Stores.map((store) => {
    product.Stores.map((id) => {
      if (store.id == id) {
        stores.push(store);
      }
    });
  });
  console.log('Tiendas: ');
  console.log(stores);

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,

    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [modal, setModal] = useState(false);
  const [radiusAux, setRadiusAux] = useState(1);
  const [radiusToShow, setRadiusToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperState, setSwiperState] = useState(0);
  const [radius, setRadius] = useState(2000);
  const [shops, setShops] = useState(stores);
  const [userCoords, setUserCoords] = useState(stores);
  const [selectedShops, setSelectedShops] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    requestPermissions();
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (userCoords && userCoords.latitude) {
      getNearlyShops();
      setDefaultValues();
    }
  }, [userCoords, radius]);

  useEffect(() => {
    if (selectedShops.length != 0) {
      handleSwiperIndexChange(0);
    }
  }, [selectedShops]);

  const setDefaultValues = () => {
    let array = shops.map((shop) => ({
      ...shop,
      isSelected: false,
      distance: getDistance(userCoords, shop.coords),
    }));
    setShops(array);
  };

  const getNearlyShops = () => {
    let nearShops = [];

    let userCoordsLatLon = {
      latitude: userCoords.latitude,
      longitude: userCoords.longitude,
    };

    shops.forEach((store) => {
      let distance = getDistance(store.coords, userCoordsLatLon);

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

  const handleFailedRequest = (response) => {};

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
      console.log('dio error we', error);
    }
  };

  const handleRegionChange = (response) => {
    console.log('value', response);
  };

  const renderMarkers = () => {
    return shops.map((store, index) => {
      return (
        <Circle
          style={{zIndex: 10}}
          center={store.coords}
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
    });
  };

  const renderPerimeter = () => {
    if (userCoords && userCoords.longitude) {
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

  const handleMapPress = ({nativeEvent}) => {
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

          updatedShops.unshift(shop);
          setSwiperState(0);
          setSelectedShops(updatedShops);
        }
      });
    } else {
      let shopsToInsert = [];
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

          shopsToInsert.push(shop);

          setSwiperState(0);
          setSelectedShops(shopsToInsert);
        }
      });
    }
  };

  const handlePropertyChange = (currentName) => {
    const updatedShops = shops.map((shop, index) => {
      if (shop.name === currentName) {
        return {...shop, isSelected: true};
      }
      return {...shop, isSelected: false};
    });
    console.log('este es el valor', updatedShops);

    setShops(updatedShops);
  };

  const handleSwiperIndexChange = (currentIndex) => {
    const moveToShop = selectedShops[currentIndex];
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
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        showsUserLocation
        onPress={handleMapPress}
        initialRegion={currentLocation}
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={handleRegionChange}
        style={{flex: 1}}>
        {renderPerimeter()}
        {renderMarkers()}
      </MapView>
      <TouchableOpacity
        onPress={() => handleOpenModal()}
        style={{position: 'absolute', top: 30, right: 20, zIndex: 10}}>
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
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Selecciona un rango
          </Text>
          <Slider
            value={radiusToShow}
            style={{width: '100%', height: 40}}
            onValueChange={(value) => setRadiusAux(value)}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor="#7fff00"
            maximumTrackTintColor="#000000"
          />
          <Text style={{fontSize: 30, textAlign: 'center', marginVertical: 10}}>
            {Math.floor(radiusAux)} Km
          </Text>
          <Button onPress={handleRadius} title="Modificar" />
        </View>
      </Modal>
    </View>
  );
}

export default MapScreen;
