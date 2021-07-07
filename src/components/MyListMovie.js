import React, { useEffect, useState } from 'react';
import { FilmContainer, Movie, Image, Info } from './elements';

const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const MyListMovie = () => {
	const [myList, setMyList] = useState([]);

	useEffect(() => {
		fetch(trendingUrl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMyList(data.results);
			});
	}, []);

	return (
		<FilmContainer>
			{myList.map((film) => {
				return (
					<Movie key={film.id}>
						<Image
							src={movieImage + film.poster_path}
							alt={film.original_title}
						/>
						<Info>{film.original_title}</Info>
					</Movie>
				);
			})}
		</FilmContainer>
	);
};

export default MyListMovie;