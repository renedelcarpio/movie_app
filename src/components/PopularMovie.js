import React, { useEffect, useState } from 'react';
import { FilmContainer, Movie, Image, Info } from './elements';

const trendingUrl = `
https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`;

const movieImage = 'https://image.tmdb.org/t/p/w154';

const PopularMovie = () => {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		fetch(trendingUrl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPopular(data.results);
			});
	}, []);

	return (
		<FilmContainer>
			{popular.map((film) => {
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

export default PopularMovie;