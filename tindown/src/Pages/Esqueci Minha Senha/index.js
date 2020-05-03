import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function EsqueciMinhaSenha() {
    return (
        <View style={style.form}>
            <Image style={style.backgroundImage} source={require('../../../assets/img/Fundo-Tindown.png')}></Image>
            <Image style={style.logo} source={require('../../../assets/img/Tindown-Logo.png')}></Image>
            <Text style={style.title}>Tindown</Text>

            <View>
                <Text style={style.text}>Digite aqui seu e-mail para mudar sua senha:</Text>
            </View>
            <View>
                <TextInput style={style.email} placeholder="e-mail" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TouchableOpacity style={style.button} onPress={() => Alert.alert('Você receberá um e-mail para mudar a senha!')}>
                    <Text style={style.textButton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create ({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
    },
    logo: {
        width: 80,
        height: 80,
    },
    title: {
        fontFamily: 'Pacifico Regular',
        fontSize: 32,
    },

    text: {
        textAlign: 'left',
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginTop: 100,
    },
    email: {
        width: 300,
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },

    button: {
        width: 300,
        height: 50,
        top: 20,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#56CCF2',
    },
    textButton: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
})
