import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext, AuthState } from '../context/AuthContext';

export const AlbunScreen = () => {

    const {logOut, authState} = useContext(AuthContext);

    return (
        <View style = {styles.globalMargin}>
            <Text style = {styles.title}>Albums Screen</Text>


            {
                authState.isLoggedIn &&
                <Button
                title = 'LogOut'
                onPress = {logOut}
                />
            }
            
        </View>
    )
}
