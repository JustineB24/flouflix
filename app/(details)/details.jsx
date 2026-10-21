import { FavContext } from '@/app/_layout';
import { colors } from "@/app/theme";
import PopUp from '@/components/ui/popup';
import ReturnButton from '@/components/ui/returnButton';
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailsLayout() {
  const [show, setShow] = useState(null);
  const [clicNumber, setClicNumber] = useState(0);
  const [clicFav, setClicFav] = useState(0);

  const params = useLocalSearchParams();
  const favContext = useContext(FavContext);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const DATA = await response.json();
        setShow(DATA);
      } catch (error) {
        router.replace('/');
      }
    };

    fetchShow();
  }, []);

  return (
    <ScrollView contentContainerStyle={stylesDetails.container}>
      <Text style={stylesDetails.title}>Détails du film ou de la série, la série s'appelle {show?.name}, elle est produite par {show?.network?.name} dans le fabuleux pays: {show?.network?.country?.name}</Text>
      <ReturnButton />
      <Pressable style={{ borderColor: colors.text, borderWidth: 1, padding: 10 }}>
          <Text onPress={() => {
              setClicFav(clicFav + 1);
              if (clicFav >= 8) {
                  favContext.addToFav(show?.id);
                  router.replace('/');
              }
          }}>
              Ce bouton sert à nous dire que vous aimez cette série, c'est donc pour l'ajouter dans votre liste des contenus vidéos préférés et ensuite revenir sur la page de la liste. (Faut appuyer plusieurs fois c'est à dire 8 fois, comme ça on est sûr que vous le voulez comme favori)
          </Text>
      </Pressable>
      <View style={stylesDetails.item}>
        <Image source={show?.image?.medium ? { uri: show.image.medium } : require('@/assets/images/placeholder.png')} style={{ width: 200, height: 300, borderRadius: 8 }} />
        <Text style={stylesDetails.titleMovie}>{show?.name}</Text>
        <Text>{show?.summary}</Text>
      </View>
      <PopUp
        title="Informations détaillées"
        description="Voici les informations détaillées du film ou de la série que vous avez sélectionné. Après avoir prit connaissance de ces informations, vous pouvez revenir à la page des détails. En cliquant sur le bouton adapté."
        cancel="Rester sur la page actuelle mais avec le pop up"
        validate="Rester sur la page actuelle mais sans le pop up"
      />
    </ScrollView>
  );
}

const stylesDetails = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'right',
    backgroundColor: '#a45864',
    borderRadius: 100,
  },
  titleMovie: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 16,
  },
  item: {
    alignItems: 'center',
  }
});