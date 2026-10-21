import MovieCard from '@/components/ui/movieCard';
import SearchBar from '@/components/ui/searchBar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const MovieList = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchMovie, setSearchMovie] = useState("");

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setShows(data);
            } catch (e) {
                setError(e.message || 'Une erreur est survenue');
            } finally {
                setLoading(false);
            }
        };

        fetchShows();
    }, []);

    if (loading) {
        return (
            <View style={styles.messageContainer}>
                <ActivityIndicator size="small" color="#df6bd9" />
                <Text style={styles.message}>Chargement de trucs en cours... Attendez... Peut-être longtemps...</Text>
            </View>
        );
    }

    if (error) {
        return <Text style={styles.message}>Erreur: {error}</Text>;
    }

    const filteredShows = shows.filter((show) =>
        show.name?.toLowerCase().includes(searchMovie.toLowerCase())
    );

    return (
        <View>
            <SearchBar value={searchMovie} onChange={setSearchMovie} />

            <View style={styles.grid}>
                {filteredShows.map((show) => (
                    <MovieCard key={show.id} show={show} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        width: '100%',
        alignItems: 'center',
    },
});

export default MovieList;
