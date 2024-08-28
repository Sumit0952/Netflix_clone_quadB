import React, { useState } from 'react';
import { View, FlatList, TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = (text) => {
    setQuery(text);
    if (text.length > 2) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
        .then(response => setMovies(response.data))
        .catch(error => console.error(error));
    } else {
      setMovies([]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.show.name}</Text>
          <Text style={styles.summary}>{item.show.summary?.replace(/<[^>]+>/g, '')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        value={query}
        onChangeText={searchMovies}
        style={styles.searchBar}
      />
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.show.id.toString()}
        />
      ) : (
        query.length > 2 && (
          <View style={styles.noMoviesContainer}>
            <Text style={styles.noMoviesText}>No movies found</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black', 
  },
  searchBar: {
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  summary: {
    fontSize: 14,
    color: '#d3d3d3',
  },
  noMoviesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoviesText: {
    fontSize: 18,
    color: 'white',
  },
});

export default SearchScreen;
