import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";

const APIURL = "https://yts.mx/api/v2/movie_details.json?movie_id=";

const MoreDetail = ({title_long, large_cover, desc, genres, detailUrl}) => {
    return (
        <div>
            <h1>{title_long}</h1>
            <img src={large_cover} alt="title"/>
            <p>{desc}</p>
            <ul>
                {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <a href={detailUrl}>Go to see detail</a>
        </div>
    )
}

const Detail  = () => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const x = useParams();
    console.log(x);

    const fetchData = async(id) => {
        const res = await fetch(APIURL + id);
        const ret = await res.json();
        console.log(ret);

        setMovie(ret.data.movie);
        setLoading(false);
        return ret;
    }

    useEffect(() => {
        fetchData(x.id);
    }, []);

    return (<div>
        {loading ? <Loading /> : 
                    <MoreDetail title_long={movie.title_long} large_cover={movie.large_cover_image} desc={movie.description_full} genres={movie.genres} detailUrl={movie.url} />}
    </div>)
}

export default Detail;