import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'






export default function Pagina3Screen() {


    const [nombre, setnombre] = useState('')
    const [edad, setedad] = useState(0)


    useEffect(() => {
        if (edad < 0) {
            setedad(0)
        }
    }, [edad])



    function usuario() {
        Alert.alert('Mensaje', 'El nombre del usuarios es' + nombre + 'tiene ' + edad + 'a;os')


    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Formulario</Text>
            <TextInput
                style={styles.input}
                placeholder='Ingresar Nombre'
                onChangeText={(texto) => setnombre(texto)}
            />
            <TextInput
                style={styles.input}
                placeholder='Ingresar Edad'
                onChangeText={(texto) => setedad(+texto)}
                keyboardType='numeric'
                //value={edad.toString()}
            />
<View style={styles.buttonContainer}>
            <Button title='Aceptar' onPress={() => usuario()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: 'grey',
        fontSize: 20,
        height: 50,
        width: '50%',
        textAlign: 'center',
        color: 'white',
        margin: 3

    },

    container: {
        alignContent: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonContainer: {
        width: '90%',
        marginTop: 20,
        borderRadius: 15,
        overflow: 'hidden',
    },

})