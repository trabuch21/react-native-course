import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop:top}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="rocket" size={80} color="#900" />
        <Icon name="calculator" size={80} color="#900" />
        <Icon name="dice" size={80} color="#900" />
        <Icon name="heart" size={80} color="#900" />
        <Icon name="heart-outline" size={80} color="#900" />
        <Icon name="heart-half" size={80} color="#900" />
        <Icon name="heart-dislike" size={80} color="#900" />
        <Icon name="heart-dislike-outline" size={80} color="#900" />
        <Icon name="heart-half-outline" size={80} color="#900" />
        <Icon name="heart-half-sharp" size={80} color="#900" />
        <Icon name="heart-sharp" size={80} color="#900" />

      </Text>
    </View>
  );
};
