import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/* Formulario para editar perfil */
export default class EditarPerfil extends Component {
    buttonInstagram = () => {
        const { navigation } = this.props

        navigation.navigate('Perfil')
    }

    render() {
        return (
        <ScrollView>
            <View style={style.form}>

                    <Text style={style.text}>Editar Perfil</Text>
                    <Image style={style.perfil} source={require('../../../assets/img/ExampleDown.jpg')}></Image>

                    <View style={style.editarNome}>
                        <Text style={style.nome}>Nome</Text>
                        <TextInput style={style.exemploNome} placeholder="Exemplo Nome" placeholderTextColor="#000"></TextInput>
                    </View>
                    <View style={style.editarLocal}>
                        <Text style={style.local}>Local</Text>
                        <TextInput style={style.exemploLocal} placeholder="Exemplo Local" placeholderTextColor="#000"></TextInput>
                    </View>
                    <View style={style.editarDescricao}>
                        <Text style={style.descricao}>Descricao</Text>
                        <TextInput style={style.exemploDescricao} placeholder="Exemplo Descrição" placeholderTextColor="#000"></TextInput>
                    </View>

                    <View>
                        <TouchableOpacity style={style.button} onPress={this.buttonInstagram} >
                            <LinearGradient colors={['#983BBF', '#D9328E']} style={style.linearGradient} >
                                <Text style={style.textButton}>Vincular com Instagram</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

            </View>
        </ScrollView>
        )
    };
}

/* Design */
const style = StyleSheet.create({
    form: {
        flex: 1,
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
    perfil: {
        alignSelf: 'center',
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },

    editarNome: {
        marginLeft: 5,
        width: 350,
        height: 100,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    nome: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
    },
    exemploNome: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        marginLeft: 20,
    },

    editarLocal: {
        marginLeft: 5,
        width: 350,
        height: 100,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    local: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
    },
    exemploLocal: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        marginLeft: 20,
    },

    editarDescricao: {
        marginLeft: 5,
        width: 350,
        height: 130,
        backgroundColor: '#E0E0E0',
        marginTop: 20,
    },
    descricao: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
    },
    exemploDescricao: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 15,
        marginLeft: 20,
    },

    textButton: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
    },
    button: {
        marginTop: 25,
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,

    },
    linearGradient: {
        alignSelf: 'center',
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
    },
})
