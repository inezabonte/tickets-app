import React, {useEffect, useState} from 'react';
import { View,StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { displayContentAction, headerAction } from '../redux/actions/headerAction';
import { useDispatch } from 'react-redux';

 const CustomNavigationBar = ({navigation, previous}) => {
    const routeName = previous ? previous.route.name : null;
    const headerHeight = routeName === 'Verification' ? 80 : 60;
    const [borderWidth, setBorderWidth] = useState({menu1:3, menu2:0, color1: 'orange', color2:'white'});
    const dispatch = useDispatch();
    
    useEffect(() =>{
      dispatch(headerAction(false))
    },[]);

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
      const handleHomeClick = () =>{
        setBorderWidth({menu1:3,menu2:0, color1:'orange', color2:'white'});
        return dispatch(displayContentAction('Home'));
      }
      const handlePurchasedClick = () =>{
        setBorderWidth({menu1:0,menu2:3, color2:'orange', color1:'white'})
        return dispatch(displayContentAction('Purchased'));
      }
    
    return (
      <Appbar.Header style={{backgroundColor:'#257AAA',height:headerHeight}}>
        {previous && (routeName !== 'Verification') ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
          {(routeName === 'Verification') ? (
            <View style={styles.headerContainer}>
                <Appbar.Content title="Tickets App" />  
                <View style={styles.menu}>
                  <Button style={styles.butt1} color={borderWidth.color1} onPress={handleHomeClick}>HOME</Button>
                  <Button style={styles.butt2} color={borderWidth.color2} onPress={handlePurchasedClick}>PURCHASED</Button>
                </View>
            </View>
          ) : <Appbar.Content title="Tickets App" />  
        }
        <Appbar.Action />
      </Appbar.Header>
    );
  }



  export default CustomNavigationBar;

