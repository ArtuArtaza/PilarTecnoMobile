import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:width,
        display:'flex',
    },
    map: { ...StyleSheet.absoluteFillObject, width, height, alignSelf: 'center', top: 70, },
})