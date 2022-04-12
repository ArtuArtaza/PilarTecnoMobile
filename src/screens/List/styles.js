import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:width,
        display:'flex',
        
    },
    text: {
        color:'black',
    },
    imageContainer: {
        display:'flex',
        width:width,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
    },
    image:{
        width: width / 2,
        height: height / 4 ,
    },

    button: {
        width:width/2.5,
        backgroundColor:'red',
        borderColor:'red',
        
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center'
    }

})