import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina4Screen() {

    const [kelvin, setKelvin] = useState(0);
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);


    useEffect(() => {
        if (kelvin < 0) {
            validador()
            setKelvin(0)
                ;
        } else {

            setCelsius(kelvin - 273.15);
            setFahrenheit((kelvin - 273.15) * 9 / 5 + 32);
        }
    }, [kelvin]);

    function validador() {
        Alert.alert(
            'Error', 'Grados Kelvin no puede ser negativo'
        );
    }

    function mostrarConversion() {
        Alert.alert(
            'Conversiones', 'Grados Kelvin:' + kelvin.toFixed(2) +'Grados Celsius:' + celsius.toFixed(2) + 'Grados Fahrenheit:' + fahrenheit.toFixed(2)
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Temperaturas</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresar Kelvin"
                onChangeText={(texto) => setKelvin(+texto)}
                keyboardType="numeric"

            />
            <View style={styles.buttonContainer}>
            <Button title="Convertir" onPress={mostrarConversion} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaf8fc',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0077cc',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#ffffff',
        fontSize: 20,
        height: 55,
        width: '90%',
        textAlign: 'center',
        color: '#333',
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#0077cc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },

    buttonContainer: {
        width: '90%',
        marginTop: 20,
        borderRadius: 15,
        overflow: 'hidden',
    },


})