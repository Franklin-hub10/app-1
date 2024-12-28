import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/20257.jpg' }}
            style={styles.container}
        >

            <Text style={{ fontSize: 30, color: 'white' }}>WelcomeScreen</Text>
            <Text style={{ fontSize: 30, color: 'white' }}>Nombres..</Text>
            <Text style={{ fontSize: 30, color: 'white' }}>Apellidos</Text>

            <Button title='Ingresar'
                onPress={() => navigation.navigate('Botton')} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
justifyContent:'center',
alignItems:'center',
alignContent:'center',

    }


})