import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Loading from "../components/Loading"

const APIURL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();
  
    const getMoves = async() =>{
      const res = await fetch(APIURL);
      const json = await res.json(); 
    
      setMovies(json);
      setLoading(false);
    }
  
    useEffect(() => {
      getMoves();    
    }, []);
  
    console.log('render');
  
    return (
      <div>
        <h1>Movie app</h1>
  
        {loading ? <Loading /> 
                    : <Movies movies={movies}/> }
      </div>
    );
}

export default Home