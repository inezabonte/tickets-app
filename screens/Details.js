import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Paragraph, Title, Button } from 'react-native-paper';
import styles from '../styles/Details';

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
              <Title style={{color:'blue',fontSize:17}}>Description</Title>
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
