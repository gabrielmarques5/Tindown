import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Slider, ScrollView, TextInput } from 'react-native';
export default class Configuracoes extends Component {
    buttonSenha = () => {
        const { navigation } = this.props;

        navigation.navigate('EsqueciMinhaSenha')
    }

    buttonSair = () => {
        const { navigation } = this.props;

        navigation.navigate('Login')
    }

    buttonExcluirConta = () => {
        const { navigation } = this.props;

        navigation.navigate('Login')
    }

    render() {
        return (
            <ScrollView>
                <View style={style.form}>
                    <Text style={style.text}>Configurações</Text>

                    <View style={style.faixaEtaria}>
                        <Text style={style.textFaixaEtaria}>Faixa etaria                                           18</Text>
                        <Slider style={{ width: 350, height: 20 }}
                            minimumValue={18}
                            maximumValue={70}
                            minimumTrackTintColor="#77CFF2"
                            maximumTrackTintColor="#000000"
                            thumbTintColor="#77CFF2"></Slider>
                    </View>
                    <View style={style.busca}>
                        <Text style={style.textBusca}>Distancia de busca                           18km</Text>
                        <Slider style={{ width: 350, height: 20 }}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#77CFF2"
                            maximumTrackTintColor="#000000"
                            thumbTintColor="#77CFF2"></Slider>
                    </View>

                    <View style={style.numero}>
                        <Text style={style.textNumero}>Número</Text>
                        <TextInput style={style.celular} placeholder="(16) 00000-0000" placeholderTextColor="#000"></TextInput>
                    </View>
                    <View style={style.senha}>
                        <Text style={style.textSenha}>Senha</Text>
                        <TouchableOpacity style={style.buttonSenha} onPress={this.buttonSenha}>
                            <Text style={style.textButtonSenha}>Clique aqui para mudar sua senha</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.buttonSair} onPress={this.buttonSair}>
                            <Text style={style.textSair}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={style.buttonExcluirConta} onPress={this.buttonExcluirConta}>
                            <Text style={style.textExcluirConta}>Excluir Conta</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={style.textVersaoApp}>Versão atual do aplicativo</Text>
                        <Text style={style.versaoApp}>1.0</Text>
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
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 25,
    },

    faixaEtaria: {
        marginLeft: 5,
        width: 350,
        height: 60,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    textFaixaEtaria: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 5,
    },

    busca: {
        marginLeft: 5,
        width: 350,
        height: 60,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    textBusca: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 5,
    },

    numero: {
        marginLeft: 5,
        width: 350,
        height: 70,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    textNumero: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 5,
    },
    celular: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        marginLeft: 20,
    },

    senha: {
        marginLeft: 5,
        width: 350,
        height: 60,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    textSenha: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 5,
    },
    buttonSenha: {
        alignSelf: 'center',
        width: 300,
        height: 50,
    },
    textButtonSenha: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
    },

    buttonSair: {
        marginTop: 25,
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#EB2F2F'
    },
    textSair: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },

    buttonExcluirConta: {
        marginTop: 25,
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: '#EB2F2F',
    },
    textExcluirConta: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },

    textVersaoApp: {
        marginTop: 20,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        textAlign: 'center',
    },
    versaoApp: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        textAlign: 'center',
    },
})
