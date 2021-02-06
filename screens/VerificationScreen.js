import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native'
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { getToken } from '../twilio'


export default function VerificationScreen({route, navigation}) {
    useEffect(() => {
        // getToken(route.params)
    },[])

    const [token, setToken] = useState("")

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
                <Text style={{color: 'white', textAlign: 'center', fontSize: 17}}>
                    Enter the verification code sent to +250{route.params}
                </Text>
                <TextInput
                placeholder="Enter code"
                placeholderTextColor='white'
                textContentType='oneTimeCode'
                value={token}
                onChangeText={(e) => setToken(e)}
                style={styles.input}
                maxLength={6}
                keyboardType='number-pad'
                />
                <Button
                color='white'
                mode='contained'
                onPress={() => navigation.navigate('Home')}
                disabled={!token}
                >
                    verify
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
     flex: 0.4,
     justifyContent: 'center',
     justifyContent: 'space-around',
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
