import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:width,
        display:'flex',
        flexDirection:'column',
        padding:20,
    },
    text: {
        color:'black',
        marginTop:5,
        fontWeight:'500'
    },
    imageContainer: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width: width,
        height: height / 2 ,
    },
    pokemonName:{
        color:'black',
        fontSize:32,
        textAlign:'center',
        textTransform:'capitalize',
        fontWeight:'800'
    },
    pokeInfoContainer:{
        padding:20,
        borderWidth:2,
        borderRadius:12,
    },
    pokeInfoTitle: {
        color:'black',
        fontWeight:'800',
        fontSize:20,
        marginBottom:10,
        textDecorationLine:'underline',
    },
    row: {
        display:'flex',
        flexDirection:'column'
    },
    col: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    }

})