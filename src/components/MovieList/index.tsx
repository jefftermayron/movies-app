'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/src/types/movie';



export default function MovieList(){
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, [])

    //parametros para puxar os dados da api
    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '9adb504279b5c3358bd957ffb51b8f53',
                language: 'pt-BR'
            }
        })
        //manipular as repostas
        .then(response => {
            //onde está retornando os dados da api
            setMovies(response.data.results);
            console.log(response.data.results);
        })
    }

    return(
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    // o certo é pasar a key onde está recebendo o comnente e não dentro do componente
                    key={movie.id}
                    //passando o objeto movie, sem prescisar passar todos os componentes
                    movie={movie}
                />
            )}
        </ul>
    )
}