import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import qrcode from '../assets/qr.png'
const TicketScreen = () => {
    return (
        <View style={styles.container}>
           <Image source={qrcode}></Image> 
           <Text>Team A Vs Team B</Text>
           <View>
            <Text>Names: Ntirenganye Rene Promese</Text>
            <Text>Date of the event: Sunday 12/05/2021</Text>
            <Text>Date of purchase: Sunday 12/05/2021</Text>
            <Text>Address: Kigali Arena</Text>
            <Text>Seats: 69</Text>
           </View>
           <Text>Price: 100FRW</Text>
           <Button title='Print' />
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})
