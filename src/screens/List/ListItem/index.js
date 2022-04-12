import React, { useCallback, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/actions";

const ListItem = ({ data,navigation }) => {
  const dispatch = useDispatch()
  const [pokeData, setPokeData] = useState(null);
  const { pokemon, url } = data;
  useEffect(() => {
      getPokemonData();
    }, [pokemon]);
    const getPokemonData = useCallback(
        () => {
        fetch(url)
        .then((res) => res.json())
        .then((parsedData) => setPokeData(parsedData));
    },[url]) 
  return (
  <View>
      {
          pokeData 
          ? 
          <TouchableOpacity onPress={() => {
            dispatch(actions.pokemon.setPokemon(pokeData))
            navigation.navigate("ListDetail")
          }}>
          <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri:pokeData.sprites.other["official-artwork"].front_default}}/>
        </View>
        </TouchableOpacity>
          
        : <Text style={{color:'black',textAlign:'center'}}>Cargando...</Text> 
        }
  </View>);
};

export default React.memo(ListItem);
