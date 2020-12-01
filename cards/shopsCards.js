import React, {useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Animated, {interpolate} from 'react-native-reanimated';
import {useTransition} from 'react-native-redash/lib/module/v1';
import ShopCard from './shopCard';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 20,

    paddingHorizontal: 24,
  },
});

export const ShopCards = (props) => {
  const animatedValue = useTransition(props.previewState, {duration: 200});
  const swiperRef = useRef(null);
  const translateY = interpolate(animatedValue, {
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  useEffect(() => {
    if (!!swiperRef) {
      if (swiperRef.current.state.index != 0 && props.swiperState == 0) {
        swiperRef.current.scrollBy(0 - props.currentIndex, true);
      }
    }
  }, [props.swiperState]);

  const renderShops = () => {
    return props.selectedShops.map((shop) => {
      return <ShopCard shop={shop} navigation={props.navigation} />;
    });
  };

  const renderDot = () => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,.2)',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
          position: 'relative',
          bottom: -40,
        }}
      />
    );
  };

  const renderActiveDot = () => {
    return (
      <View
        style={{
          backgroundColor: '#007aff',
          width: 8,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
          position: 'relative',
          bottom: -40,
        }}
      />
    );
  };

  return (
    <Animated.View style={[styles.container, {transform: [{translateY}]}]}>
      <Swiper
        ref={swiperRef}
        key={props.selectedShops.length}
        showsButtons={false}
        dot={renderDot()}
        onIndexChanged={props.handleSwiperIndexChange}
        activeDot={renderActiveDot()}>
        {renderShops()}
      </Swiper>
    </Animated.View>
  );
};

export default ShopCards;
