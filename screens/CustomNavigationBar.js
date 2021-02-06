import React, {useState} from 'react';
import { View,StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

export default function CustomNavigationBar({ navigation, previous }) {

    const routeName = previous ? previous.route.name : null;
    const headerHeight = routeName === 'Verification' ? 80 : 60;
    const [borderWidth, setBorderWidth] = useState({menu1:3, menu2:0, color1: 'orange', color2:'white'});
    const styles = StyleSheet.create({
        headerContainer:{
          display: 'flex',
          flexDirection: 'column',
          width:'100%'
        },
        menu:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
          
        },
        butt1:{
          width:'50%',
          borderBottomColor:'orange',
          borderBottomWidth: borderWidth.menu1,
        },
        butt2:{
          width:'50%',
          borderBottomWidth:borderWidth.menu2,
          borderBottomColor:'orange'
        }
      })
    
    return (
      <Appbar.Header style={{backgroundColor:'#257AAA',height:headerHeight}}>
        {previous && (routeName !== 'Verification') ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
          {(routeName === 'Verification') ? (
            <View style={styles.headerContainer}>
                <Appbar.Content title="Tickets Apps" />  
                <View style={styles.menu}>
                  <Button style={styles.butt1} color={borderWidth.color1} onPress={()=> setBorderWidth({menu1:3,menu2:0, color1:'orange', color2:'white'})}>HOME</Button>
                  <Button style={styles.butt2} color={borderWidth.color2} onPress={()=> setBorderWidth({menu1:0,menu2:3, color2:'orange', color1:'white'})}>PURCHASED</Button>
                </View>
            </View>
          ) : <Appbar.Content title="Tickets App" />  
        }
        <Appbar.Action />
      </Appbar.Header>
    );
  }


  