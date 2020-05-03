import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

export default class Home extends Component {
    buttonInformation = () => {
        const { navigation } = this.props;

        navigation.navigate('Perfil')
    }

    render () {
    return (
        <View style={style.form}>
            <Image style={style.foto} source={require('../../../assets/img/ExampleDown.jpg')}></Image>

            <View>
                <TouchableOpacity style={style.buttonLike}>
                    <Image style={style.imageLike} source={require('../../../assets/img/Like.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonDeslike}>
                    <Image style={style.imageDeslike} source={require('../../../assets/img/Deslike.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonInformation} onPress={this.buttonInformation}>
                    <Image style={style.imageInformation} source={require('../../../assets/img/Information.png')}></Image>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={style.nomeIdade}>Nome, Idade</Text>
            </View>
            <View>
                <Text style={style.local}>Localidade</Text>
            </View>
            <View>
                <TouchableOpacity style={style.buttonDenunciar} onPress={() => Alert.alert('Denunciar')}>
                    <Text style={style.textDenunciar}>Denunciar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )};
}

const style = StyleSheet.create ({
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foto: {
        position: 'absolute',
        width: 400,
        height: 400,
        top: 0,
    },

    buttonLike: {
        position: 'absolute',
        right: 120,
        top: 140,
    },
    imageLike: {
        width: 40,
        height: 40,
    },
    buttonDeslike: {
        position: 'absolute',
        right: 70,
        top: 140
    },
    imageDeslike: {
        width: 40,
        height: 40,
    },
    buttonInformation: {
        position: 'absolute',
        left: 120,
        top: 140,
    },
    imageInformation: {
        width: 40,
        height: 40,
    },

    nomeIdade: {
        position: 'absolute',
        right: 50,
        top: 190,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
    local: {
        position: 'absolute',
        right: 70,
        top: 220,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },

    buttonDenunciar: {
        width: 100,
        height: 25,
        top: 260,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#EB5757',
    },
    textDenunciar: {
        marginTop: -2,
        textAlign: 'center',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        color: '#EB5757',
    },
})
