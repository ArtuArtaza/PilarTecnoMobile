import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "./ListItem";
import { styles } from "./styles";
import {BASE_URL} from '../../constants'

const List = (props) => {
  const [next, setNext] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const loadMore = () => {
    setLoadingMore(true);
    getPokemonList(next).then((data) => {
      setPokemonList([...pokemonList, ...data.results]);
      setNext(data.next);
      setLoadingMore(false);
    });
  };
  const getPokemonList = (next) => {
    const url = next ? next : `${BASE_URL}/pokemon/?limit=20`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return Promise.resolve(data);
      })
      .catch((err) => {
        throw err;
      });
  };
 
  useEffect(() => {
    getPokemonList().then(data => {
      setPokemonList(data.results)
      setNext(data.next)})
  }, next);
  return (
    <SafeAreaView style={styles.container}>
      {pokemonList ? (
        <>
          <FlatList
            data={pokemonList}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator />
              ) : (
                <Button title="Cargar mas" onPress={() => loadMore()} />
              )
            }
            renderItem={({ _, index }) => (
              <ListItem
                data={pokemonList[index]}
                navigation={props.navigation}
              />
            )}
          />
        </>
      ) : (
        <Text>Cargando</Text>
      )}
    </SafeAreaView>
  );
};

export default List;
