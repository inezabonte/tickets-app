import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Subheading, Card,Title,Text as paperText, Paragraph } from 'react-native-paper';
import { cardContent } from '../dummyData';

export default function Home({navigation}) {
  const MainCard = ({data}) => {
 return (
  <Card key={`card-${data.index}`} 
    style={styles.cardContainer} 
    onPress={() => navigation.navigate('Details', data)}
    onLongPress={() => null}
  >
      <Card.Cover key={`card-cover-${data.index}`} style={{height:150}} source={{ uri: `${data.content.image}` }}/>
      <Card.Actions key={`card-action-${data.index}`}  style={{padding:0, margin:0}}>
          <Card.Content key={`card-content-${data.index}`}  style={{paddingLeft:20, paddingRight:20}}>
              <Title key={`card-title-${data.index}`}  style={{fontSize:18,marginTop:0,marginBottom:0}} key={`title-${data.index}`}>{`${data.content.team1} vs ${data.content.team2}`}</Title>
              <View key={`card-details-${data.index}`}  style={styles.cardDetails}>
                  
                  <View key={`details-${data.index}`} style={styles.detailsItem}>
                    
                    <Paragraph key={`item-${data.index}`} style={styles.cardParagraph}>
                        {data.content.when}
                    </Paragraph>
                    <Paragraph key={`item2-${data.index}`} style={styles.cardParagraph}>
                        {data.content.where}
                    </Paragraph>
                  </View>

                  <View key={`details2-${data.index}`} style={styles.detailsItem2}>
                    <Paragraph key={`item-${data.index}`} style={styles.cardParagraph}>
                        <Text>{data.content.time}</Text>
                    </Paragraph>
                    <Paragraph key={`item2-${data.index}`} style={styles.cardParagraph}>
                        <Text>{data.content.price}</Text>
                    </Paragraph>
                    
                  </View>
                  
              </View>
          </Card.Content>
      </Card.Actions>
  </Card>
);
     
 }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.subTitle}>
        <Title>Upcoming games</Title>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {cardContent.map((content, index) =>(
            <MainCard data={{content,index}}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4fb',
},
  subTitle:{
    display:'flex',
    borderStyle: 'solid',
    paddingLeft:10,
  },
  content:{
      alignItems:'center',
      paddingBottom:10,
  },
  cardContainer:{
    width: '95%',
    marginTop: 25,
  },
  cardDetails:{
      borderColor: 'black',
      display: 'flex',
      flexDirection:'row',
      width: '100%',
      margin:0
  },
  detailsItem:{
      width: '50%',
      borderColor: 'red',
  },
  detailsItem2:{
      width: '50%',
      borderColor: 'red',
      alignItems:'flex-end'
  },
  cardParagraph:{
      display:'flex',
      flexDirection:'column',
      paddingTop:0,
      marginTop:0,
      marginBottom:0,
  },
  itemTitle:{
      fontWeight:'bold'
  }
});