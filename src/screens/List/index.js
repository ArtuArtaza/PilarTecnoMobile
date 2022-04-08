import React,{useState,useEffect} from "react";
import { Text, View } from "react-native";
const List = () => {
  const [page,setPage] = useState(0)
  
  const getPokemonList = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${20 * page}&limit=20`)
    .then(res => res.json())
    .then(data =>'')
  }

  useEffect(() => {
    getPokemonList()
  },[page])
  return (
    <View>
      <Text>LIST PEPE</Text>
    </View>
  );
};

export default List;
