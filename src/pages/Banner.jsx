import React, {useState, useEffect} from "react";
import './banner.css';
import MovieContent from "../components/MovieContent";
import MovieName from "../components/MovieName";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then (data => setMovies(data))
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSlideChange = id => {
        const newMovies = movies.map(movie => {
            movie.active = false;
            if(movie._id===id){
                movie.active = true;
            }
            return movie;
        });
        setMovies(newMovies);
    }

    return (
        <div className="banner">
            {
                movies && movies.length>0 && movies.map(movie=>(
                    <div className="movie">
                        <img 
                            src={movie.bgImg} 
                            alt="Background" 
                            className={`bgImg ${movie.active ? 'active' : undefined}`} 
                        />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <MovieContent movie={movie}/>
                                </div>
                                <div className="col-lg-5 col-md-12 centreDate">
                                    <MovieName movie={movie}/>
                                    <PlayBtn movie={movie}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            }
            <MovieSwiper />
        </div>
    )
}

export default Banner;