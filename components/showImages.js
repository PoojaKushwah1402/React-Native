import React , { useEffect, useState } from 'react';
import {  StyleSheet,Keyboard, View, TextInput, Button, FlatList, Image } from 'react-native';
import { Formik } from 'formik';
import {TouchableWithoutFeedback } from 'react-native';


const  ShowImages = ( {navigation} ) => {

    const [title, setState] = useState('');
    const [image,setImages] = useState([]);

    const dismiss = () => {
        Keyboard.dismiss() 
        console.log('dismiss')
    }

const fetchdata =  (value) => {
    console.log(value+'fetch1')
    const url = `https://pixabay.com/api/?key=19313287-27f79b56a4de4e4b439fecdb9&q=${value}&image_type=photo`
    fetch(url)
    .then( (response) => {
        console.log(value+'fetch2');
        rep =  response.json()
        return rep;
    })
    .then( (response) => {
        setImages(response.hits)
        console.log(response.hits,'resp');
        
    }
    )
    .catch( (error)=>{
        alert(error);
    })
  
}

useEffect(  () => { 

    console.log('component '+ title)
    if(title) {
        fetchdata(title)
    }
}, [title] )


    return ( 
        <TouchableWithoutFeedback onPress = { dismiss } > 

        <View style ={styles.container} >
            <Formik  
                    initialValues = {{title : ''}}
                    onSubmit={values => setState(values.title)}
                    >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style = {styles.form} >
                            <TextInput
                                style = {styles.button}
                                onChangeText={handleChange('title')}
                                placeholder = 'Enter Requirment'
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            <Button color = 'maroon'  onPress={handleSubmit} title="Submit" />
                        </View>
                    )}
            </Formik>
                 
            <FlatList 
                data = {image}
                keyExtractor = {(item) => item.id.toString() }

                renderItem = { ( {item } ) => (
                    <Image style = {styles.images}
                            source = { {
                                width : 200,
                                height : 100,
                                uri : item.webformatURL
                            }}
                    />
                )}
            />
        </View>
        </TouchableWithoutFeedback>

    )     
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'lightblue',
        width : '100%',
        alignItems : 'center',
        height : '90%',
        borderWidth : 1,
        borderColor : 'black',
        margin : '1%',
        padding : '2%'

    },

    form : {
        backgroundColor : 'pink',

        width : '80%',
        paddingTop : '1%'
    },
    button : {
        padding : '1%',
        margin : '1%'
    },
    images : {
        borderWidth : 1,
        borderColor : 'black',
        margin : '1%'
    }


});

export default ShowImages;