import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Title, Button } from 'react-native-paper';

export default function Details({ route }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
          <View key={`header-${route.params.index}`} style={styles.headerImage}>
            <ImageBackground
                source={{ uri: `${route.params.content.image}` }}
                style={styles.imageContainer}
            >
                <View style={styles.textContainer}>
                    <Title
                        style={styles.titleText}
                    >
                        {route.params.content.team1} vs {route.params.content.team2}
                    </Title>

                </View>
            </ImageBackground>
          </View>
          <View key={`details-${route.params.index}`} style={styles.detailsContainer}>
              <Title style={{color:'blue'}}>Description</Title>
              <Paragraph numberOfLines={9} style={styles.parText}>
                  {route.params.content.description}
              </Paragraph>
              <View key={`when-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>When: </Text>
                  <Text>{route.params.content.when}</Text>
              </View>
              <View key={`where-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Where: </Text>
                  <Text>{route.params.content.where}</Text>
              </View>
              <View key={`time-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Time: </Text>
                  <Text>{route.params.content.time}</Text>
              </View>
              <View key={`seats-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Remaining Seats: </Text>
                  <Text>{route.params.content.remainingSeats}</Text>
              </View>
              <View key={`ticket-${route.params.index}`} style={styles.detailsItem}>
                  <Text style={styles.boldItem}>Ticket: </Text>
                  <Text>{route.params.content.price}</Text>
              </View>
          </View>
          <View key={`button-${route.params.index}`} style={styles.buttonContainer}>
              <Button 
              mode='contained'
              >
                  Get a TicketS
              </Button>
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage:{
      display: 'flex',
      width:'100%',
      height: '27%',

  },
  imageContainer:{
    height: 150,
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor:'rgba(0,0,0,0.5)'
    },
  textContainer:{
    width:'100%',
    height:'100%',
    position: 'absolute',
    top:0,
    justifyContent: 'flex-end',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.3)'
    },
    titleText:{
        fontWeight: 'bold',
        color: 'white',
    },
    detailsContainer:{
        display:'flex',
        paddingLeft: 20,
        paddingRight:20,
        width: '100%',
        height: '65%',
    },
    parText:{
        height:'50%',
        paddingLeft:5,
        marginBottom:15,
    },
    detailsItem:{
        display:'flex',
        flexDirection:'row',
        marginTop:5,
        paddingLeft:15,
    },
    boldItem:{
        color: 'blue',
        fontWeight:'bold',
    },
    buttonContainer:{
        marginTop:10,
        justifyContent: 'center',
        alignItems:'center'
    }

});