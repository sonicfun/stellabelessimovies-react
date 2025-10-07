import React, {useState, useEffect} from 'react';
import './moviePoster.css';
import Card from '../components/Card';


 //This javascript function is used for the buttons. The first is active as it shows all the movie posters 
function MoviePoster() {
     const filterList = [
      {
        _id: 1,
        name: 'All',
        active: true,
      },
      {
        _id: 2,
        name: 'Drama',
        active: false,
      },
      {
        _id: 3,
        name: 'Drama with documentary elements',
        active: false,
      },
      {
        _id: 4,
        name: 'Black Comedy',
        active: false,
      },
      {
        _id: 5,
        name: 'Thriller',
        active: false,
      },
      {
        _id: 6,
        name: 'Horror',
        active: false,
      },
     ];


 //These are the javascript constants for the data, movies and filters
    const [data, setData] =useState([]);
    const [movies, setMovies]= useState([]);
    const [filters, setFilters] = useState(filterList);


     //This is a fetch to collect the movie data from the folder data and the moviedata json!
    const fetchData = () =>{
        fetch(process.env.PUBLIC_URL + '/data/movieData.json')
        .then(res=>res.json())
        .then(data =>setData(data))
        .catch(e => console.log(e.message));
    };

    useEffect( ()=>{
      fetchData();
    }, []);

    useEffect(() =>{
      setMovies(data);
    }, [data]);



 //This is a constant which communicates with the filters!
    const handleFilterMovies = category => {
       setFilters(
        filters.map(filter => {
          filter.active = false;
            if (filter.name === category) {
              filter.active = true;
            }
            return filter;
            })
       );


        if(category==='All'){
            setMovies(data);
            return;
        }
       setMovies(data.filter(movie => movie.category === category));
    };
     

     //This is both the skeleton and react script which shows the section and communicates with the component card!
    return (
      <section id="movieposter" className='movieposter'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Available Now</h4>
            </div>
            <div className="row">
                 <ul className="filters">
                    {filters.map(filter => (
                        <li 
                        key={filter._id}
                        className={`${filter.active ? 'active' :undefined}`}
                        onClick={() => {
                            handleFilterMovies(filter.name);
                        }}
                        >
                            {filter.name}</li>
                    ))}
                 </ul>
            </div>
            <div className="row mt-5">
                {movies && 
                movies.length> 0 && 
                movies.map(movie => <Card key={movie._id} movie={movie} />)}
            </div>
        </div>
      </section> 
    );
}

export default MoviePoster;
