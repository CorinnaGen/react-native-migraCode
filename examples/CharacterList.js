import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

const CharacterList = () => {
  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character',
        );
        const data = await response.json();
        setCharacterData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
    };
    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Characters</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={characterData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.characterContainer}>
              <Image source={{uri: item.image}} style={styles.characterImage} />
              <View style={styles.characterDetails}>
                <Text style={styles.characterName}>{item.name}</Text>
                <Text>Status: {item.status}</Text>
                <Text>Species: {item.species}</Text>
                <Text>Gender: {item.gender}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  characterDetails: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CharacterList;
