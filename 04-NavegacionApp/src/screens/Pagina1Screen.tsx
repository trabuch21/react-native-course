import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {
  id: number;
  nombre: string;
}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />

      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}>
          <Text
            style={styles.botonGrandeText}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 1,
                nombre: 'Pedro',
              })
            }>
            Pedro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.botonGrande, backgroundColor: '#FF9427'}}>
          <Text
            style={styles.botonGrandeText}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 2,
                nombre: 'Maria',
              })
            }>
            Maria
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
