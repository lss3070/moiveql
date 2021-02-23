import fetch  from "node-fetch";
import axios from "axios";
const BASE_URL = "http://yts.mx/api/v2/";
const LIST_MOVIES_URL=`${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL=`${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL=`${BASE_URL}movie_suggestions.json`;





const API_URL = "https://yts.mx/api/v2/list_movies.json?"


export const getMovies = async (limit, rating) => {

    const {
        data:{
            data:{movies}
        }
    }=await axios(LIST_MOVIES_URL,{
        params:{
            limit,
            minimum_rating:rating
        }
    });
    
    return movies;
    let REQUEST_URL= API_URL;
    if(limit>0){
        REQUEST_URL +=`limit=${limit}`;
    }
    if(rating>0){
        REQUEST_URL +=`&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res=>res.json())
        .then(json=>json.data.movies);
    // return fetch(`${API_URL}`)
    //     .then(res => res.json())
    //     .then(json => json.data.movies);

};

export const getMovie= async id=>{
    const{
        data:{
            data:{movie}
        }
    }=await axios(MOVIE_DETAILS_URL,{
        params:{
            movie_id:id
        }
    });
    console.log(movie);
    return movie;
};

export const getSuggestions = async id=>{
    const{
        data:{
            data:{movies}
        }
    }= await axios(MOVIE_SUGGESTIONS_URL,{
        params:{
            movie_id:id
        }
    });
    return movies;
}

// let movies = [
//     {
//       id: 0,
//       name: "Nicolas",
//       score: 18
//     },
//     {
//       id: 1,
//       name: "Jisu",
//       score: 18
//     },
//     {
//       id: 2,
//       name: "Japan Guy",
//       score: 18
//     },
//     {
//       id: 3,
//       name: "Daal",
//       score: 18
//     },
//     {
//       id: 4,
//       name: "JD",
//       score: 18
//     },
//     {
//       id: 5,
//       name: "moondaddi",
//       score: 18
//     },
//     {
//       id: 6,
//       name: "flynn",
//       score: 18
//     }
//   ];
  
//   export const getMovies =()=>movies;

//   export const getById = id => {
//     const filteredPeople = movies.filter(movie => movie.id === id);
//     return filteredPeople[0];
//   };


//   export const deleteMovie=(id)=>{
//       const cleanMovies = movies.filter(movie=>movie.id!== id);
//       if(movies.length>cleanMovies.length){
//           movies=cleanMovies;
//           return true
//       }else{
//           return false
//       }
//   }

//   export const addMovie=(name,score)=>{
//       const newMovie={
//           id:`${movies.length+1}`,
//           name,
//           score
//       }
//       movies.push(newMovie);
//       return newMovie;
//   }