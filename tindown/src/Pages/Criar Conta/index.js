import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';


/* Formulario de Cadastro */
export default class CriarConta extends Component {
    buttonRegister = () => {
        const { navigation } = this.props;

        navigation.navigate('Home')
    }

    render () {
    return (
        <View style={style.form}>
            <Image style={style.backgroundImage} source={require('../../../assets/img/Fundo-Tindown.png')}></Image>
            <Image style={style.logo} source={require('../../../assets/img/Tindown-Logo.png')}></Image>
            <Text style={style.title}>Tindown</Text>

            <View>
                <TextInput style={style.email} placeholder="e-mail" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TextInput style={style.nome} placeholder="nome" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TextInput style={style.nascimento} placeholder="nascimento" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TextInput style={style.celular} placeholder="celular" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TextInput style={style.cpf} placeholder="CPF" placeholderTextColor="#000"></TextInput>
            </View>
            <View>
                <TextInput secureTextEntry={true} style={style.senha} placeholder="senha" placeholderTextColor="#000"></TextInput>
            </View>

            <View>
                <TouchableOpacity style={style.button} onPress={this.buttonRegister}>
                    <Text style={style.textButton}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )};
}

/* Design do Formulario */
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
        top: -20,
    },
    title: {
        fontFamily: 'Pacifico Regular',
        fontSize: 30,
        top: -20,
    },

    email: {
        width: 300,
        height: 50,
        top: -10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        marginTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },
    nome: {
        width: 300,
        height: 50,
        top: 0,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },
    nascimento: {
        width: 300,
        height: 50,
        top: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },
    celular: {
        width: 300,
        height: 50,
        top: 20,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },
    cpf: {
        width: 300,
        height: 50,
        top: 30,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },
    senha: {
        width: 300,
        height: 50,
        top: 40,
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
        top: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#56CCF2'
    },
    textButton: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
})
