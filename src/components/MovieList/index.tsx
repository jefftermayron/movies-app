'use client';

import { useEffect, useState, useRef } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/src/types/movie';



export default function MovieList(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const observerTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getMovies(page);
    }, [page]);

    // 2. MOTOR DO VIGIA: Observa se o usuário chegou no final da tela
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log("👀 O vigia está vendo a âncora?", entries[0].isIntersecting);
                
                if (entries[0].isIntersecting && !loading) {
                    console.log("➡️ Mudando para a próxima página!");
                    setPage((prevPage) => prevPage + 1); 
                }
            },
            { threshold: 0.1 } // Mudamos de 1.0 para 0.1 (bem mais fácil de acionar)
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [loading]);

    //parametros para puxar os dados da api
    const getMovies = async (currentPage: number) /*Promise<movie[]>*/ => {
        setLoading(true);
        try {
            const response = await axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/discover/movie',
                params: {
                    api_key: '9adb504279b5c3358bd957ffb51b8f53',
                    language: 'pt-BR',
                    page: currentPage,
                }
            });
        //manipular as repostas
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);

        } catch (error) {
            console.error("Erro ao buscar filmes da API", error);
        } finally {
            setLoading(false); // Desliga o aviso de carregando
        }
    }

    return(
    <>
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
        {/* A ÂNCORA: Elemento invisível que o Observer vai vigiar */}
        <div ref={observerTarget} style={{ height: "20px", backgroundColor: "transparent" }}></div>
        
        {/* Um spinner do Bootstrap para dar feedback visual */}
        {loading && (
            <div>
                <div>
                    <span>Carregando...</span>
                </div>
            </div>
        )}
    </>
    );
}