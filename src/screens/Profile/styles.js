import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        padding:16,
        width:width,
        height:height,
    },
    text: {
        fontSize:20,
        paddingBottom:3,
        color:'black',
    },
    btn:{
        color:'black',
        marginTop:16,
        padding:8,
        fontSize:32,
        width:width / 3,
        marginLeft:width/4,
        backgroundColor:'#0d6efd',
    },

    image:{
        width:width / 4,
        marginLeft:width/4,
        borderRadius:width,
        height:height / 10,
    }

})