import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    btn: {
      color:'white',
      backgroundColor:'#dc3545',
      padding:10,
      width:width / 2 ,
      marginBottom:10,
    },
    text : {
      textAlign:'center'
    },
    backgroundWallpaper: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:width,
      height:height,
      gap:30,
    }
})