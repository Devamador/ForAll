import React, {Component} from 'react';
import { 
    View,
    ScrollView, 
    StyleSheet, 
} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

import HeaderComponent from './components/header';

const list = [
    {
        title: 'Encanador',
        icon: 'av-timer'
    },
    {
        title: 'Eletricista',
        icon: 'av-timer'
    },
    {
        title: 'Pintor',
        icon: 'av-timer'
    },
    {
        title: 'Pedreiro',
        icon: 'av-timer'
    },
    {
        title: 'Marceneiro',
        icon: 'av-timer'
    },
    {
        title: 'Arquiteto',
        icon: 'av-timer'
    },
    {
        title: 'Jardineiro',
        icon: 'av-timer'
    },

]

export default class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
      }
      _isMounted = false;
    
    updateSearch = search => {
        this.setState({ search });
    };
   
    render(){
    
    const { search } = this.state;

        return(
         
            <View style={styles.body}>
              <ScrollView>
                <HeaderComponent title={'Serviços'} navigation={this.props.navigation}/>
                
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="android"
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.searchInput}
                    round
                />  
                <View>
                    
                {
               

                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            
                            leftIcon={{ name: item.icon }}
                            bottomDivider
                            chevron
                            containerStyle={styles.listContainer}
                            onPress={() =>{
                       
                                this.props.navigation.navigate('Results',{rota: item.title})
                            }}

                        />
                        ))         
                     
                }
                
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#D3D3D3"
    },
    searchContainer: {
        backgroundColor: "#D3D3D3",
        borderRadius: 4,
    },
    searchInput:{
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    listContainer: {
        marginTop: 5,
    },
    listContent: {
        
    }


});