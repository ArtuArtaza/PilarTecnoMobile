import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { styles } from "./styles";
const ListDetail = () => {
  const pokemon = useSelector((state) => state["pokemon"].pokemon);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprites.other["official-artwork"].front_default,
          }}
        />
      </View>
      <View>
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
        <View style={styles.pokeInfoContainer}>
          <Text style={styles.pokeInfoTitle}>Information</Text>
          <View style={styles.col}>
            <View style={styles.row}>
              <Text style={styles.text}>Numero: {pokemon.id}</Text>
              <Text style={styles.text}>Altura: {pokemon.height / 100}m</Text>
              <Text style={styles.text}>Peso: {pokemon.weight / 100}kg</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Peso: {pokemon.weight / 100}kg</Text>
              <View>
                   {
                      pokemon.types.map((type) => (<Text style={styles.text} key={type.type.name}>
                          {type.type.name}
                      </Text>))
                  }
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListDetail;
