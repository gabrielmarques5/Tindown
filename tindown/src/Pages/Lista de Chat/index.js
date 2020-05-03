import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';

export default class ListadeChat extends Component {
    buttonChat = () => {
        const { navigation } = this.props;

        navigation.navigate('Chat')
    }

    render() {
        return (
            <ScrollView>
                <View style={style.form}>
                    <Text style={style.text}>Matches</Text>

                    <View style={style.contentBusca}>
                        <Image style={style.imgBusca} source={require('../../../assets/img/Buscar.png')}></Image>
                        <TextInput style={style.busca} placeholder="Buscar"></TextInput>
                    </View>

                    <View>
                        <TouchableOpacity style={style.buttonChat} onPress={this.buttonChat}>
                            <Image style={style.foto} source={require('../../../assets/img/ExampleDown.jpg')}></Image>
                            <Text style={style.nome}>Nome</Text>
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
    text: {
        marginTop: 5,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 25,
        textAlign: 'center',
    },
    contentBusca: {
        flexDirection: 'row'
    },
    imgBusca: {
        marginLeft: 10,
        marginTop: 20,
        width: 25,
        height: 25,
    },
    busca: {
        marginTop: 5,
        marginLeft: 15,
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        alignItems: 'center',
        borderColor: '#77CFF2',
        borderWidth: 1,
        width: 300,
        height: '100%'
    },

    buttonChat: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#77CFF2',
        flexDirection: 'row'
    },
    foto: {
        marginLeft: 5,
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nome: {
        fontFamily: 'Reem Kufi Regular',
        fontSize: 20,
        marginLeft: 15,
        marginTop: 15
    },
})
