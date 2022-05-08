import React,{useState,useEffect} from 'react'
import axios from '../axios'
import './row.css'


const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({ title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        async function fetcData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetcData();
    },[fetchUrl])
  return (
    <>
     <div className="app__row">
         <h2 className='text-center mt-4 mb-4'>{title}</h2>

         <div className="row__posters">
            {movies.map((movie)=>(
             <img 
               key={movie.id}
               className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
               src={`${base_url}${isLargeRow ?  movie.poster_path : movie.backdrop_path }`} 
               alt={movie.name} 
            />    
            ))}
        </div>
     </div>

    </>
  )
}

export default Row