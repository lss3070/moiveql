

import {getMovie, getMovies, getSuggestions} from "./db";

const resolvers={
    Query:{
        movies:(_,{rating,limit})=>getMovies(limit,rating),
        movie:(_,{id})=>getMovie(id),
        suggestions:(_,{id})=>getSuggestions(id)
    }
}
export default resolvers;
// import {getMovies, getById, addMovie, deleteMovie } from "./db";

// const resolvers = {
//   Query: {
//     movies: () => getMovies(),
//     movie: (_, { id }) => getById(id)
//   },
//   Mutation:{
//       addMovie:(_,{name,score})=>addMovie(name,score),
//       deleteMovie:(_,{id})=>deleteMovie(id)
//   }
// };

