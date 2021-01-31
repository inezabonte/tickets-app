import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import * as Yup from 'yup'

const yupValidation = Yup.object().shape({
    phoneNumber: Yup.number().min(10).required()
})

export default function LoginScreen() {
    return (
        <View style={styles.container}>
           <LinearGradient
           colors={["#6ADEED", "#4D9CC9", "#2A4C9D"]}
           style={styles.LinearBackground}
           start={{x: 0, y:0}}
           end = {{x:1, y: 1}}
           >
               <View style={styles.form}>
                   <Formik
                   initialValues={{phoneNumber: ""}}
                   onSubmit = {(value) => {
                       console.log(value.phoneNumber)
                   }}
                   validationSchema={yupValidation}
                   >
                       {(props) => (
                           <View style={styles.inner_form}>
                               <TextInput
                               placeholder='Your Phone number'
                               placeholderTextColor='white'
                               onChange={props.handleChange('phoneNumber')}
                               value={props.values.phoneNumber}
                               style={styles.input}
                               />

                                <Text style={{color: 'white', textAlign: 'center'}}>
                                An SMS with a verification code will be sent to your phone shortly
                                </Text>

                               <Button
                               color='white'
                               onPress={props.handleSubmit}
                               mode='contained'
                               disabled={!props.values.phoneNumber}
                               
                               >
                                   Continue
                               </Button>
                           </View>
                       )}
                   </Formik>
               </View>
           </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
    LinearBackground:{
        flex: 1,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },
    inner_form: {
        flex: 0.5,
        justifyContent: 'center',
        justifyContent: 'space-evenly'
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
