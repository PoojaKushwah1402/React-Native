import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

const Index = ( {navigation} ) => {

    return (
        <View style = {styles.navContainer} >
          <Text style = {styles.text} >Welcome to my APP,</Text> 
          <Text style = {styles.bottom}> Please enter details to fetch data</Text>
          <Button  
            title = "Enter Details"
            onPress = { () => navigation.navigate('Login Screen') }
          />
        </View>
    )
    

}

export default Index;



const styles = StyleSheet.create({
    navContainer: {
      color : 'white',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : 'pink',
      width : '100%',
      height : '100%',
      padding : 10,
    },
    text : {
      fontWeight : 'bold',
      fontSize : 20
    },
    bottom : {
      marginBottom : '10%',
      fontWeight : 'bold',
      fontSize : 20
    }
  });
  