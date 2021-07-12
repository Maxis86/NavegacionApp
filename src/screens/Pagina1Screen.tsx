import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import {styles} from '../theme/appTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps <any, any>{};
interface Props extends DrawerScreenProps <any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
    
    useEffect(() => { // generamos la hamburguesa para el menu
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity 
                style = {{
                    marginLeft: 10
                }}
                onPress={()=> navigation.toggleDrawer()}
                >
                    <Icon name="menu-outline" size={35} color="black" /> 
                </TouchableOpacity>
                )
        })
    }, [])
    
    return (
        <View style = { styles.globalMargin }>
            <Text style = {styles.title}>Pagina 1 Screen</Text>

            <Button
                title = "Ir a pagina 2"
                onPress = { () => navigation.navigate('Pagina2Screen')}
            />

        <Text style = {{
            marginVertical: 20,
            fontSize: 20
        }}>Navegar con Argumentos</Text>
        <View style = {{flexDirection: 'row', justifyContent:'center'}}>
            <TouchableOpacity
            style = {{...styles.botonGrande,
                    backgroundColor: 'blue'
                    }}
            onPress = { () => navigation.navigate('PersonaScreen', {
                id: 1,
                nombre: 'Maxi'
            })}
            >   
                <Icon name="man-outline" size={35} color="black"/>
                <Text style = {{...styles.botonGrandeTexto, marginTop:10}}> Maxi</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style = {{...styles.botonGrande,
                backgroundColor: 'orange'
                }}
            onPress = { () => navigation.navigate('PersonaScreen', {
                id: 2,
                nombre: 'Gigi'
            })}
            >
                <Icon name="woman-outline" size={35} color="black"/> 
                <Text style = {{...styles.botonGrandeTexto, marginTop:10}}>  Gigi</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
}
