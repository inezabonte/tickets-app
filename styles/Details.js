import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
          fontSize: 22,
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