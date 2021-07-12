import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbunScreen } from '../screens/AlbunScreen';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary
        },
        style:{
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0 
        },
      }}
      screenOptions={ ({route}) =>({
        tabBarIcon: ({color, focused}) =>{

        let iconName;

          switch (route.name) {
            case 'ChatScreen':
              iconName = <Icon name="add-sharp" size={20} color="black" />
            break;
            case 'ContactsScreen':
              iconName = <Icon name="clipboard-outline" size={20} color="black" />
            break;
            case 'AlbunScreen':
              iconName = <Icon name="albums-outline" size={20} color="black" />
            break;
          }

          return <Text style = {{color}}>{iconName}</Text>
        }
    })}

    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbunScreen" component={AlbunScreen} />
    </Tab.Navigator>
  );
}