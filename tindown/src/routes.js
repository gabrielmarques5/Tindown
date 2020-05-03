import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Pages/Login';
import Home from './Pages/Home';
import Chat from './Pages/Chat';
import Configuracoes from './Pages/Configurações';
import CriarConta from './Pages/Criar Conta';
import EditarPerfil from './Pages/Editar Perfil';
import EsqueciMinhaSenha from './Pages/Esqueci Minha Senha';
import ListadeChat from './Pages/Lista de Chat';
import Perfil from './Pages/Perfil';

const AppStackNavigator = createStackNavigator({
    Home: { screen: Home },
    ListadeChat: { screen: ListadeChat },
    Perfil: { screen: Perfil },
}, {headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions:({navigation}) => ({
        headerStyle: {
            backgroundColor: "#77CFF2",
        },
        headerTintColor: '#000000',
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image style={{marginLeft: 10, width: 40, height: 40}} source={require('../assets/img/Perfil.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
        headerTitle: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/img/Tindown-icone.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
        headerRight: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ListadeChat')}>
                    <Image style={{marginRight: 10, width: 40, height: 40}} source={require('../assets/img/Chat.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
    })
})

const AppStackNavigatorSecundary = createStackNavigator({
    EditarPerfil: { screen: EditarPerfil },
    Configuracoes: { screen: Configuracoes },
}, {headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions:({navigation}) => ({
        headerStyle: {
            backgroundColor: "#77CFF2",
        },
        headerTintColor: '#000',
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/img/Back.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
        headerTitle: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/img/Tindown-icone.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
    })
})

const AppStackNavigatorChat = createStackNavigator({
    Chat: { screen: Chat },
}, {headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions:({navigation}) => ({
        headerStyle: {
            backgroundColor: "#77CFF2",
        },
        headerTintColor: '#000',
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ListadeChat')}>
                    <Image style={{width: 40, height: 40}} source={require('../assets/img/Back.png')}></Image>
                </TouchableOpacity>
            </View>
        ),
        headerTitle: (
            <View>
                <Image style={{width: 40, height: 40, borderRadius: 25,}} source={require('../assets/img/ExampleDown.jpg')}></Image>
            </View>
        ),
    })
})

const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: Login },
    CriarConta: { screen: CriarConta },
    EsqueciMinhaSenha: { screen: EsqueciMinhaSenha },
    Home: { screen: AppStackNavigator },
    EditarPerfil: { screen: AppStackNavigatorSecundary },
    Chat: { screen: AppStackNavigatorChat },
})

const Routes = createAppContainer (
   AppSwitchNavigator,
);

export default Routes;
