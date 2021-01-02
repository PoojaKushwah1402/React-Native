import React from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

const Login = ( {navigation} ) => {
    
    return (
         <View style = {styles.LogForm} >
            <Text style = {styles.heading} > LoginPage </Text>

            <View style = {styles.details}>
                <View style = {styles.nameDetails} >
                    <Text style = {styles.headingDetail} > Enter Your Name </Text>
                    <TextInput style = {styles.inputdata} placeholder = 'Name' />
                </View>

                <View style = {styles.nameDetails} >
                    <Text style = {styles.headingDetail}  > Enter Your Age </Text>
                    <TextInput 
                        style = {styles.inputdata} 
                        placeholder = 'Age' 
                        keyboardType = 'numeric'
                    />
                </View>

                <Button title = 'Submit' onPress = { ()=> navigation.navigate('Search Data') } />
                
            </View>

        </View>
    )

}

export default Login;

const styles = StyleSheet.create({
    LogForm : {
       // marginTop : '10%',
        backgroundColor : 'lightblue',
        height : '100%',
        width : '100%',
        alignItems: 'center',
        padding : '2%'

    },
    heading : {
      color : 'black',
      fontSize : 20,
      fontWeight : "bold"
    },
    details : {
      //  margin : '2%',
        height : '80%',
        width : '100%',
        padding : '5%',
    },
    nameDetails : {
       // flex : 1,
       // margin : '1%',
        alignItems: 'center',
    },
    headingDetail : {
        color : 'black',
        fontSize : 15,
        fontWeight : "bold",
      //  margin : '1%'
      },
      inputdata : {
          borderColor : 'black',
          width : '80%',
          height : '30%',
          borderWidth : 1,
        //  padding : '5%',
          textAlign : 'center'
      },
})