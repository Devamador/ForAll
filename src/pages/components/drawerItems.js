import React, { Component } from 'react';
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerItems extends React.Component{


    render(){
        const { navigation, displayName, email } = this.props;

        return(
            <View>
                <View style={{flexDirection:'row', padding:10}}>
                    <Image 
                        source={require('../../img/avatar.jpg')}
                        resizeMode="contain" 
                        style={{margin:10, width:60, height:60, borderRadius:30}} 
                    />
                    <View style ={{justifyContent:'center', margin:5}}>
                        <Text style={{fontWeight:'700', fontSize:20, color:'#444',maxWidth: 170}}>{displayName}</Text>
                        <Text style={{fontWeight:'200', color:'#999',maxWidth: 170}}>{email}</Text>
                    </View>
                </View>
                 <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('Profile',{title: 'Perfil'})}}
                     >
                        <Icon name = 'md-person' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('Main')}}
                    >
                        <Icon name = 'md-hammer' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Serviços</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('ComingSoon')}}
                    >
                        <Icon name = 'md-star' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Favoritos</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('ComingSoon')}}
                    >
                        <Icon name = 'md-bookmark' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Interesses</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('ComingSoon')}}
                    >
                        <Icon name = 'md-construct' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Oferecer Serviços</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => {navigation.navigate('ComingSoon')}}
                    >
                        <Icon name = 'md-at' size={25} color="#333" style={{margin:15}} />
                        <Text style={styles.menuItemText}>Fale Conosco</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        flexDirection:'row'
      },
      menuItemText: {
        fontSize:15,
        fontWeight:'300',
        margin:15,
      }
});
