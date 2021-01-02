//import 'react-native-gesture-handler';
import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import Navigator from './navigator';
import Login from './login'
import ShowImages from './showImages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Index = () => {
    //console.log('index');
    const nav = 'My Application'
    


    return (
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen name = "Home" component = {Navigator} />
                    <Stack.Screen name="Login Screen" component={Login}  />
                    <Stack.Screen name="Search Data" component={ShowImages}  />
                
                </Stack.Navigator>
            </NavigationContainer>

    )
}

export default Index;



// const styles = StyleSheet.create({
//     Container: {
//       color : 'red',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop : '10%',
//     },
//   });
  