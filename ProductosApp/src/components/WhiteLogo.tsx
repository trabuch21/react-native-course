import React from 'react';
import {Image, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/MyPichichoss.png')}
        style={{
          width: 400,
          height: 400,
          marginTop: 50,
        }}
      />
    </View>
  );
};
