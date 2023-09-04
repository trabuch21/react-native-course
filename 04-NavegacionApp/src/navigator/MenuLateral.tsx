import React from 'react';
import {DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={
        (props) => <MenuInterno {...props} />
      }
      >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
   // parte del avatar 
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image source={{uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'}} 
        style={styles.avatar} />
      </View>

      {/* // opciones de menu */}
      <View style={styles.menuContainer} >
        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row' }}
        onPress={()=> navigation.navigate('Tabs') }>
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row' }}
          onPress={()=> navigation.navigate('Settings') }
          >
            <Icon name="cog" size={23} color="black" />
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>
        
      </View>
    </DrawerContentScrollView>
  )
  
}