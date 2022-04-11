import React from 'react'
import {Text,View,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import { actions } from '../../store/actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Profile = () => {
    const imgUrl = "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    const dispatch = useDispatch(state => state.user.user)
    const logOut = () => {
        try {
            AsyncStorage.setItem("user",JSON.stringify(false))
        }catch(error){
            console.log(`error:${error}`)
        }
        dispatch(actions.user.setUser(false))
    }
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}/>
                <Text style={styles.text}>
                    Nombre: Joaquin Chumbita
                </Text>
                <Text style={styles.text}>
                    Email: JoaquinChum@gmail.com.ar
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => logOut()}>
                    <Text >Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile