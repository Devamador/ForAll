import React, {Component} from 'react';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, BackHandler } from 'react-native';
import * as firebase from 'react-native-firebase';


export default class HeaderComponent extends React.Component {
    
    signout = async () => {
        await firebase.auth().signOut()
            .then(() => {
                console.log('Sign Out');
                BackHandler.exitApp();   
            }).catch((error) => {
                console.log(error);
                
            })       
    }
    render(){
        const { title, navigation} = this.props;
        return(
            <View>
                <Header
                    leftComponent={<Icon name="md-menu" size={30} color="#fff"   onPress={() => {navigation.toggleDrawer()}}/>}
                    centerComponent={{ text: title, style: { color: '#fff', fontSize: 20} }}
                    rightComponent={<Icon name="md-exit" size={30} color="#fff" onPress={this.signout} />}
                />
            </View>
            );
    }
}


