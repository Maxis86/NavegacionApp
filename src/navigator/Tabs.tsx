import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const bottomTabIos = createBottomTabNavigator();

export const Tabs = () => {

  return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
}

const bottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <bottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor:colores.primary
      }}
      screenOptions={ ({route}) =>({
        tabBarIcon: ({color, focused}) =>{

        let iconName: string ='';

          switch (route.name) {
            case 'Tab1Screen':
                iconName = "arrow-redo-outline"
            break;
            case 'Tab2Screen':
                iconName = "checkmark-outline"
            break;
            case 'StackNavigator':
                iconName = "arrow-undo-outline"
            break;
          }

          return <Icon name={iconName} size={20} color="white" />
        }
    })}
    >
      <bottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen}/>
      <bottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator}/>
      <bottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator}/>
    </bottomTabAndroid.Navigator>
  );
}

const TabsIOS = () => {
  return (
    <bottomTabIos.Navigator
        sceneContainerStyle = {{
          backgroundColor: ' white'
        }}
        tabBarOptions={{
          activeTintColor: colores.primary,
          style:{
            borderTopColor: colores.primary,
            borderTopWidth: 0,
            elevation: 0 
          },
          labelStyle:{
            fontSize: 15
          }
        }}
        screenOptions={ ({route}) =>({
            tabBarIcon: ({color, focused, size}) =>{

            let iconName: string ='';

              switch (route.name) {
                case 'Tab1Screen':
                  <Icon name="settings-outline" size={30} color="blue" />
                break;
                case 'Tab2Screen':
                    iconName = 'T2'
                break;
                case 'StackNavigator':
                    iconName = 'ST'
                break;
              }

              return <Text style = {{color}}>{iconName}</Text>
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen}/> */}
      <bottomTabIos.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen}/>
      <bottomTabIos.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTabNavigator}/>
      <bottomTabIos.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator}/>
    </bottomTabIos.Navigator>
  );
}