import React, {Component} from 'react';
import { StyleSheet, View, Text,Image,ScrollView, ActivityIndicator, BackHandler } from 'react-native';
import {Card} from 'react-native-elements';
import  Icon from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import  * as firebase  from 'react-native-firebase';

import HeaderComponent from './components/header';

var lista =[];

export default class Results extends React.Component{
   state = {
    isLoading: true,
   }
   
   _isMounted = false;
 
    
    componentDidMount(){
        this._isMounted = true;
        firebase.database().ref('profissional').once('value') 
        .then(snapshot => {
            if(this._isMounted){
                snapshot.forEach(childsnap => {
                    lista.push(childsnap.val());

                })
                
                this.setState({isLoading: false});
                
            }
        
        }) 
    }

    
    componentWillUnmount(){
       this._isMounted = false;
    }
 
    render(){
        const { rating, navigation} = this.props;
        const { isLoading } = this.state;
       
        return(
         
            <View>
                <ScrollView>
                <HeaderComponent title={navigation.getParam('rota')} navigation={navigation}/>
                
                    
                <Card>
                    <View>
                    <ActivityIndicator size="small" color="#00ff00" animating={isLoading}/>
                    {
                        
                        
                        !isLoading 
                        ? lista.map((u, i) => {
                            if(u.profissao == navigation.getParam('rota')){
                                
                                return (
                                    
                                    <View key={i} style={styles.user}>
                                    <View style={styles.imgview}>    
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={require('../img/logo2.jpg')}
                                    />
                                    </View>
                                    <View>
                                    <View style={styles.textview}>
                                    <Text style={styles.name}>{u.nome}</Text>
                                    </View>
                                    <View>
                                    <AirbnbRating 
                                        size={20}
                                        showRating={false}
                                    />
                                    </View>
                                    </View>
                                    <View style={styles.chat}>
                                    <Icon  name='md-chatboxes' size={30} onPress={() => navigation.navigate('Chat',{name: navigation.getParam('rota')})} />
                                    </View>
                                    </View>
                                );
                            }
                
                        })
                        : null
                    }
                    </View>
                </Card>
    
                </ScrollView>
               
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    user:{
        
        backgroundColor: '#FFF',
        flexDirection:'row',
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 10,
       // height: 70,
    },
    imgview:{
        justifyContent:'center',
    },
    image:{
        backgroundColor: '#FFF',
        //borderRadius: 100,
        width:70,
        height: 70,

    },
    name:{
        //backgroundColor: 'red',
        textAlign: "center",
        color:'#000',
        fontSize: 24,

    },
    textview:{
        
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        marginLeft: 10, 
       // alignItems: 'center',
        
    },
    rating: {
        marginVertical: 10,
        marginLeft: 20,
    },
    chat: {
        marginHorizontal: 10,
       

    }

})