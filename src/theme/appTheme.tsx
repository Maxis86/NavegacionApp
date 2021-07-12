import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 50
        
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,        
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    avatar: {
        width: 150,
        height: 150,
         borderRadius: 100
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 20
    },
    menuContainer:{
        marginVertical: 50,
        marginHorizontal: 50,
    },
    menuText:{
        flexDirection: 'row',
        fontSize:20
    },
    menuBoton:{
        marginVertical: 10
    }
});