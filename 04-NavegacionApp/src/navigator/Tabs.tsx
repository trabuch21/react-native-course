import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigator} from './StackNavigator';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {colores} from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid =() => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'rocket';
              break;
            case 'Tab2Screen':
              iconName = 'dice';
              break;
            case 'StackNavigator':
              iconName = 'heart';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        }
      })}
      
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab 2'}}component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'rocket';
              break;
            case 'Tab2Screen':
              iconName = 'dice';
              break;
            case 'StackNavigator':
              iconName = 'heart';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      
>


{/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab 1', headerShown:false, tabBarIcon: (props)=> <Text style={{color:props.color}}> T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab 1', headerShown:false}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab 2', headerShown:false}}component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack', headerShown:false}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
};
