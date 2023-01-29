import { useState } from 'react';
import MovieCard from './MovieCard';
import './CardStyle.css';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            title: "Howl's Moving Castle",
            poster: "http://cdn.shopify.com/s/files/1/1057/4964/products/Howls-Moving-Castle-Vintage-Movie-Poster-Original-Japanese-1-panel-20x29.jpg?v=1668143056",
            alts: "Hauru no Ugoku Shiro Hayao",
            genre: "Romance | Fantasy | Adventure",
            director: "Hayao Miyazaki",
            year: 2005,
            rating: "PG",
            hour: 1,
            min: 59,
            synopsis: `Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. However, the evil Witch of Waste takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.`,
            url: "https://youtu.be/iwROgK94zcM",
            id: 1,
        },

        {
            title: "Princess Mononoke",
            poster: "http://cdn.shopify.com/s/files/1/1057/4964/products/Princess-Mononoke-Vintage-Movie-Poster-Original-Japanese-1-Panel-20x29_e5dd796e-fe7d-42ab-a82c-0fce785688da.jpg?v=1665735757",
            alts: "Mononoke Hime",
            genre: "Adventure | Fantasy | War",
            director: "Hayao Miyazaki",
            year: 1997,
            rating: "PG -13",
            hour: 2,
            min: 13,
            synopsis: `In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.`,
            url: "https://youtu.be/4OiMOHRDs14",
            id: 2,
        },

        {
            title: "A Silent Voice",
            poster: "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            alts: "Koe no Kitachi",
            genre: "Drama | Award-Winning | ",
            director: "Naoko Yamada",
            year: 2016,
            rating: "PG",
            hour: 2,
            min: 9,
            synopsis: `As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.`,
            url: "https://www.youtube.com/watch?v=nfK6UgLra7g",
            id: 3,
        },
    ]);

    return (
        <div id="movieContainer">
            <MovieCard movies={movies} />
        </div>
    )
}

export default MovieList; 