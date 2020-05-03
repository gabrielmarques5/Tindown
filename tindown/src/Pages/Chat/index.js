import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

export default class Chat extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.form}>

                    <Text style={style.mensagem1}>Mensagem...</Text>
                    <Text style={style.mensagem2}>Mensagem...</Text>
                    <View style={style.digitarMensagem}>
                        <TextInput style={style.digite} placeholder="Digite aqui..."></TextInput>
                        <TouchableOpacity>
                            <Image style={style.enviar} source={require('../../../assets/img/Enviar.png')}></Image>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        )
    };
}

const style = StyleSheet.create({
    form: {
        flex: 1,
    },

    mensagem1: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginTop: 400,
        marginLeft: 230,
        width: 120,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        textAlign: 'center',
    },
    mensagem2: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        width: 120,
        height: 40,
        borderWidth: 1,
        backgroundColor: '#E0E0E0',
        borderRadius: 25,
        textAlign: 'center',
    },
    digitarMensagem: {
        flexDirection: 'row',
    },
    digite: {
        marginLeft: 15,
        marginTop: 15,
        paddingLeft: 15,
        paddingTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        backgroundColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 25,
        width: 280,
        height: 50,
    },
    enviar: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 10,
    },
})
