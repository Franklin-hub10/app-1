import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Tarjeta2(props: any) {

    const [visible, setvisible] = useState(false)


    return (
        <TouchableOpacity style={styles.container} onPress={() => setvisible(true)}>
            <Text style={styles.txtNombre}>{props.datos.name.first} {props.datos.last}</Text>

            <Modal visible={visible} >
                <View style={styles.modal}>
                    <Text style={styles.txtNombre} >{props.datos.name.first}</Text>
                    <Image
                        style={styles.img}
                        source={{ uri: props.datos.images.main}} />
                    <Button title='cerrar' onPress={() => setvisible(false)} />
                </View>
            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    txtNombre: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },

    container: {
        backgroundColor: '#0077cc',
        margin: 5,
        padding: 10,
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modal: {
        backgroundColor: '#f5870ac9',
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginHorizontal: 20,
    },




    img: {
        width: 200,
        height: 200,
        resizeMode:'contain',
        borderRadius: 15,
        marginBottom: 20,
    }

})