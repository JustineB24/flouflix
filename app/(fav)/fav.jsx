import { FavContext } from '@/app/_layout';
import MovieCard from '@/components/ui/movieCard';
import ReturnButton from '@/components/ui/returnButton';
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FavLayout() {
  const [clicNumber, setClicNumber] = useState(0);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const favContext = useContext(FavContext);

  useEffect(() => {
    const fetchShows = async () => {
      setShows([]); // Clear previous shows before fetching new ones
      for (let i = 0; i < favContext.favList.length; i++) {
        const showId = favContext.favList[i];
        try {
          const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setShows(prevShows => [...prevShows, data]);
        } catch (e) {
          setError(e.message || 'Une erreur est survenue');
        }
      }
      setLoading(false);
    };

    fetchShows();
  }, []);

  if (loading) {
    return (
      <View style={styles.messageContainer}>
        <ActivityIndicator size="small" color="#1c9611" />
        <Text style={styles.message}>Chargement de truc en cours... Attendez... Peut-être longtemps...</Text>
      </View>
    );
  }

  if (error) {
    return <Text style={styles.message}>Erreur: {error}</Text>;
  }


  return (
    <View>
      <ReturnButton />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Liste de vos films et séries favoris</Text>
        {/* <View style={styles.containerFavoris}>
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
                <Text style={styles.buttonText}>Voilà ! C'est ici que vous pouvez retrouver vos favoris !!!</Text>
            </Pressable> */}
        {/*Remplacer par un bouton Voir vos favoris puis un bouton êtez vous sûr ?*/}
        <View style={styles.grid}>
          {shows.map((show) => (
            <View key={show.id}>
              <TouchableOpacity onPress={() => {
                console.log(`Removing show with id: ${show.id} from favorites`);
                favContext.removeFromFav(show.id);
                router.replace(`/`);
              }}>
                <Text>Ce boutton sert à supprimer le favori que vous voyez de la liste de vos favoris, juste un clic suffit, car nous pensons à votre bien être pendant la navigation</Text>
              </TouchableOpacity>
              <MovieCard key={show.id} show={show} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    alignItems: 'right',
    backgroundColor: '#a45864',
    borderRadius: 100,
  },
  grid: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 100,
    color: '#880000',
  },
  // messageContainer: {
  //     marginTop: 80,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },
  // message: {
  //     textAlign: 'right',
  //     fontSize: 18,
  //     marginTop: 12,
  //     color: '#16df85',
  // },
  // containerFavoris: {
  //     width: 200,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginBottom: 20,
  // },
  // favoris: {
  //     textDecorationLine: 'underline',
  //     color: '#202020a4',
  //     fontSize: 12,
  //     textAlign: 'center',
  // },
  // fleche: {
  //     width: 60,
  //     height: 60,
  //     resizeMode: 'contain',
  //     alignSelf: 'center',
  // },
  // button: {
  //     marginBottom: 16,
  //     padding: 12,
  //     backgroundColor: "#c29a5e",
  // },
  // buttonText: {
  //     color: "#ff0000",
  //     textAlign: "center",
  // },
});