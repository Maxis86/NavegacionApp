import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const {width} = useWindowDimensions();
 
  return (
    
    <Drawer.Navigator
        //drawerPosition="right" // cambia la barra lateral a la derecha
        drawerType={ width >= 600 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{title:'settings'}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}