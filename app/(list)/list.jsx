import { FavContext } from '@/app/_layout';
import Blink from '@/components/ui/blink';
import MovieList from '@/components/ui/movieList';
import { router } from 'expo-router';
import { useContext } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ListLayout() {
  const favContext = useContext(FavContext);

  return (
    <View style={styles.container}>
      <Text style={styles.flouflix}>FLOUFLIX</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Liste des films et des séries</Text>

        <View style={styles.containerFavoris}>
          <Image
            style={styles.fleche}
            source={require('../../assets/images/fleche.gif')}
          />
          <Text style={styles.favoris}>Pour respecter les normes des applications mobile, le bouton pour retrouver vos favoris se trouve en bas de cette page.</Text>
          <Image
            style={styles.fleche}
            source={require('../../assets/images/fleche.gif')}
          />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(fav)/fav")}
        >
          <Blink text = "Voilà ! C'est ici que vous pouvez retrouver vos favoris !!!"/>
        </Pressable>

        < MovieList />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#4d4c4c",
  },
  scrollContent: {
    paddingBottom: 24,
    alignItems: 'right',
    backgroundColor: '#b36c77',
    borderRadius: 100,
  },
  flouflix: {
    color: '#8c9600',
    margin: 20,
    padding: 10,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    backgroundColor: '#1a008b',
    borderWidth: 2,
    borderColor: '#00ffd5',
  },
  title: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 100,
    color: '#55d6c8',
  },
  messageContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'right',
    fontSize: 18,
    marginTop: 12,
    color: '#16df85',
  },
  containerFavoris: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  favoris: {
    textDecorationLine: 'underline',
    color: '#202020a4',
    fontSize: 12,
    textAlign: 'center',
  },
  fleche: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#c29a5e",
  },
});