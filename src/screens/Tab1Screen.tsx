import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log("Tab 1 Screen")
    }, [])

    return (
        <View style = {styles.globalMargin}>
            <Text style = {styles.title}> Iconos</Text>
            <Text>
                <TouchableIcon iconName="md-wifi-sharp" />
                <TouchableIcon iconName="md-trending-up" />
                <TouchableIcon iconName="md-sync-circle-outline"  />
                <TouchableIcon iconName="bug-outline"  />
                <TouchableIcon iconName="md-time-sharp" />
                <TouchableIcon iconName="earth-outline"  />
                <TouchableIcon iconName="md-tennisball" />
                
            </Text>
            

        </View>
    )
}
