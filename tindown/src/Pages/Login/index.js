import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

/* Formulario de Login */
export default class Login extends Component {
    buttonLogin = () => {
        const { navigation } = this.props;

        navigation.navigate('Home')
    }

    buttonEsqueciMinhaSenha = () => {
        const { navigation } = this.props;

        navigation.navigate('EsqueciMinhaSenha')
    }

    buttonCriarConta = () => {
        const { navigation } = this.props;

        navigation.navigate('CriarConta')
    }

    render() {
    return (
        <View style={style.form}>
            <Image style={style.backgroundImage} source={require('../../../assets/img/Fundo-Tindown.png')}></Image>
            <Image style={style.logo} source={require('../../../assets/img/Tindown-Logo.png')}></Image>
            <Text style={style.title}>Tindown</Text>

            <View>
                <TextInput style={style.email} placeholder="e-mail" placeholderTextColor="#000000"></TextInput>
            </View>
            <View>
                <TextInput secureTextEntry={true} style={style.senha} placeholder="senha" placeholderTextColor="#000000"></TextInput>
            </View>

            <View>
                <TouchableOpacity style={style.buttonLogin} onPress={this.buttonLogin}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.buttonEsqueciMinhaSenha} onPress={this.buttonEsqueciMinhaSenha}>
                    <Text style={style.textLink}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.buttonFacebook} onPress={this.buttonFacebook}>
                    <Text style={style.textButton}>Login com Facebook</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={style.buttonCriarConta} onPress={this.buttonCriarConta}>
                    <Text style={style.textLink}>Criar Conta</Text>
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
    },
    title: {
        fontFamily: 'Pacifico Regular',
        fontSize: 32,
    },

    email: {
        width: 300,
        height: 50,
        top: 50,
        borderColor: '#000000',
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
        top: 60,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'transparent',
        marginTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        paddingLeft: 15,
    },

    buttonLogin: {
        width: 300,
        height: 50,
        top: 80,
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
    buttonEsqueciMinhaSenha: {
        width: 300,
        height: 50,
        top: 90,
        alignItems: 'center',
    },
    textLink: {
        textAlign: 'center',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        color: '#2F80ED',
    },
    buttonFacebook: {
        width: 300,
        height: 50,
        top: 80,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#2F80ED',
    },
    buttonCriarConta: {
        width: 300,
        height: 50,
        top: 90,
        alignItems: 'center',
    },
})
