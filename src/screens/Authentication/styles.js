import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:width,
        display:'flex',
    },
    ["loginBtn"]: {
        padding:5,
        marginLeft:100,
        width:200,
        borderRadius:16,
        backgroundColor:'#0d6efd',
    },
    text: {
        textAlign:'center',
        color:'white',
        fontWeight:'700',
    },
    title: {
        marginTop:10,
        marginBottom:30,
        paddingLeft:30,
        paddingRight:30,
    },
    ["title_text"]:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        fontWeight:'800',
        borderRadius:32,
        padding:8,
        backgroundColor:'#0d6efd'
    }
})