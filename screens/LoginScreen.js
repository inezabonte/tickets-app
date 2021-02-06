import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView} from 'react-native'
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { Platform } from 'react-native'

export default function LoginScreen({navigation}) {
    const [phoneNumber, setNumber] = useState("")

    

    const handleSubmit = () => {
        Alert.alert("Confirm phone number",`A verification code will be sent to: +250${phoneNumber}`,[
            {text: 'cancel'},
            {text: 'Confirm', onPress: () => navigation.navigate('Verification', phoneNumber)}
        ])
    }
    const handleChange =(e) => {
        setNumber(e)
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding': "height"}
        style={styles.container}>
            <LinearGradient
            colors={["#6ADEED", "#4D9CC9", "#2A4C9D"]}
            style={styles.LinearBackground}
            start={{x: 0, y:0}}
            end = {{x:1, y: 1}}
            >
            <View style={styles.form}>

            <Text style={{color: 'white'}}>
                Enter a phone number to get verification code.
                </Text>


                <TextInput
                placeholder='ex: 712345678'
                placeholderTextColor='#cae0e3'
                style={styles.input}
                value={phoneNumber}
                onChangeText={handleChange}
                maxLength={9}
                keyboardType='number-pad'
                />

                
                <Button
                color='white'
                mode='contained'
                disabled={!phoneNumber}
                onPress={handleSubmit}
                >
                    Send verification code
                </Button>
            </View>
           </LinearGradient>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
    LinearBackground:{
        flex: 1,
        justifyContent: 'center'
    },
    form: {
        flex: 0.5,
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        padding: 30,
    },
    input:{
        marginBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        fontSize: 20,
        paddingBottom: 5,
        color: 'white'
    }
})
