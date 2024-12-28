import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
    //console.log(props);

function detalles( item: any){
Alert.alert( item.name,item)


}



    return (
        <TouchableOpacity style={styles.container} onPress={()=> detalles(props.informacion)}>
            <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
            <View style={styles.fila}>
                <Image
                    source={{ uri: props.informacion.image }}
                    style={styles.img}
                />
                <Text style={styles.txtDescripcion}>{props.informacion.description}</Text>
            </View>     
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtTitulo: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ec2f0e',
        fontWeight: 'bold'


    },

    img: {
        height: 150,
        width: 150,
        resizeMode: 'contain'


    },

    container: {
        backgroundColor: '#54a1ed',
        margin: 2,
        borderRadius: 20,
         flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
        


    },

    fila:{
        flexDirection:'row',
    },

    txtDescripcion:{
color:'white',
justifyContent:'center',
width:'50%',
textAlign:'justify',
textAlignVertical:'center',
fontSize:15,

    }

})