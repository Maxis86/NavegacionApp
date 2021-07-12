import React from 'react'

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();



export const MenuLateral = () => {

  const {width} = useWindowDimensions();
 
  return (
    
    <Drawer.Navigator
        //drawerPosition="right" // cambia la barra lateral a la derecha
        drawerType={ width >= 600 ? 'permanent' : 'front'}
        drawerContent={ (props) => <MenuInterno {...props}/>}
    >

      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingScreen"  component={SettingScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => { // coloco los componentes del menu

    return (
        <DrawerContentScrollView>

            {/* Contenedor del Avatar */}
            <View style ={ styles.avatarContainer}>
              <Image
                source={{
                  uri: 'https://multilingual.com/wp-content/uploads/avatar-placeholder-generic.png'
                }}
                style={styles.avatar}
              />
            </View >

            {/* Opciones del Manú */}
            <View style = {styles.menuContainer}>
                <TouchableOpacity 
                    style = {{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                      }}
                    onPress={ () => navigation.navigate('Tabs')}
                    >
                    <Icon name="compass-outline" size={30} color="blue" />
                    <Text style = {styles.menuText}> Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{
                      ...styles.menuBoton,
                      flexDirection: 'row',
                    }}
                    onPress={ () => navigation.navigate('SettingScreen')}
                    >
                    <Text style = {styles.menuText}><Icon name="settings-outline" size={30} color="blue" /> Ajustes</Text>
                </TouchableOpacity>
            </View>  

        </DrawerContentScrollView>
        
    )
}