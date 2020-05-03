import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class Perfil extends Component {
    buttonEditPerfil = () => {
        const { navigation } = this.props;

        navigation.navigate('EditarPerfil')
    }

    buttonConfig = () => {
        const { navigation } = this.props;

        navigation.navigate('Configuracoes')
    }

    render () {
    return (
        <View style={style.form}>
            <Image style={style.perfil} source={require('../../../assets/img/ExampleDown.jpg')}></Image>

            <View>
                <Text style={style.nomeIdade}>Nome, Idade</Text>
                <TouchableOpacity style={style.buttonEditPerfil} onPress={this.buttonEditPerfil}>
                    <Image style={style.imgEditPerfil} source={require('../../../assets/img/EditUser.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonConfig} onPress={this.buttonConfig}>
                    <Image style={style.imgConfig} source={require('../../../assets/img/Configurações.png')}></Image>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={style.sexo}>Sexo</Text>
            </View>
            <View>
                <Text style={style.local}>Localidade</Text>
            </View>
            <View>
                <Text style={style.descricao}>Descrição</Text>
            </View>
        </View>
    )};
}

const style = StyleSheet.create ({
    form: {
        flex: 1,
    },

    perfil: {
        alignSelf: 'center',
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    nomeIdade: {
        textAlign: 'center',
        marginTop: 30,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },

    buttonEditPerfil: {
        position: 'absolute',
        left: 30,
    },
    imgEditPerfil: {
        width: 50,
        height: 50,
    },
    buttonConfig: {
        position: 'absolute',
        left: 295,
    },
    imgConfig: {
        width: 50,
        height: 50,
    },

    sexo: {
        marginTop: 50,
        paddingLeft: 15,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
    local: {
        marginTop: 50,
        paddingLeft: 15,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
    descricao: {
        marginTop: 50,
        paddingLeft: 15,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    }
})
