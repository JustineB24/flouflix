import { FavContext } from '@/app/_layout';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const placeholderImage = require('../../assets/images/placeholder.png');

const MovieCard = ({ show, showDetailButton = true }) => {
    const [clicNumber, setClicNumber] = useState(0)
    const favContext = useContext(FavContext);

    const imageSource = show.image?.medium ? { uri: show.image.medium } : placeholderImage;
    const rating = show.rating?.average || 'N/A';
    const summary = show.summary ? show.summary.replace(/<[^>]+>/g, '').trim() : 'Y a pas de description pour ce film / cette série donc on ne peut rien afficher, désolé.';
    const genres = show.genres || [];

    return (
        <View style={[styles.card, favContext.favList.includes(show.id) ? styles.favori : styles.no_favori]}>
            <Pressable onPress={() => {
                setClicNumber(clicNumber + 1)
                if (clicNumber >= 3) { router.replace(`(details)/details?id=${show.id}`) }
            }}>
                <Image source={imageSource} style={[styles.image, { zIndex: 1 }]} />
            </Pressable>
            <View style={styles.content}>
                <Text style={styles.title}>{show.name}</Text>
                <TouchableOpacity >
                    <Text style={{ display: showDetailButton ? 'block' : 'none', textDecorationLine: 'underline', color: '#3b3b3b72', fontSize: 7 }}>En cliquant 3 fois, je peux voir les informations générales du film, ou même les détails. On peut y retrouver l'affiche du film, son résumé, son genre et plein d'autres trucs utiles ou pas, mais en gros en cliquant 3 fois sur l'image sert à ça en gros</Text>
                </TouchableOpacity>
                <View style={styles.metaInfo}>
                    <Text style={styles.metaText}>⭐ {rating} / 10</Text>
                </View>

                <View style={styles.genresContainer}>
                    {genres.map((genre) => (
                        <View key={genre} style={styles.genreTag}>
                            <Text style={styles.genreText}>{genre}</Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.summary}>{summary}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '50%',
        maxWidth: 320,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    no_favori: {
        backgroundColor: '#fff'
    },
    favori: {
        backgroundColor: '#ff0000'
    },
    image: {
        width: '100%',
        height: 320,
    },
    content: {
        padding: 14,
    },
    title: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    metaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    metaText: {
        color: '#555',
        fontWeight: '600',
    },
    genresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: 12,
    },
    genreTag: {
        backgroundColor: '#eee',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    genreText: {
        fontSize: 12,
    },
    summary: {
        fontSize: 13,
        color: '#333',
        alignItems: 'right',
    },
});

export default MovieCard;
