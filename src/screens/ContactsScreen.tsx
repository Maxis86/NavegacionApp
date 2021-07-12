import React from 'react'
import { useContext } from 'react';
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext, AuthState } from '../context/AuthContext';

export const ContactsScreen = () => {
    
    const {authState, signIn} = useContext(AuthContext)
    
    return (
        <View style = { styles.globalMargin}>
             <Text style ={styles.title}>Contacs Screesn</Text>
             
             { !authState.isLoggedIn 
             && <Button
                title="SignIn"
                onPress={signIn}
                />
             } 
             
        </View>

        
    )
}
