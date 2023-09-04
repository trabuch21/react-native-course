import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = ()=> {
    const {top:paddingTop} = useSafeAreaInsets()
  return (
    <Tab.Navigator
        style={{
            paddingTop
        }}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={( {route} ) => ({
            tabBarPressColor:colores.primary,
            tabBarShowIcon:true,
            tabBarIndicatorStyle:{
                backgroundColor:colores.primary
            },
            tabBarStyle:{
                borderTopColor:colores.primary,
                shadowColor:'transparent',
                elevation:0
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch (route.name) {
                  case 'Chat':
                    iconName = 'chatbox-ellipses-outline';
                    break;
                  case 'Contacs':
                    iconName = 'people-outline';
                    break;
                  case 'Albums':
                    iconName = 'image-outline';
                    break;
                }
                return <Icon name={iconName} size={20} color={color} />;
              }
            
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacs" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}