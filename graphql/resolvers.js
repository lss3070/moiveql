

import {getMovies} from "./db";

const resolvers={
    Query:{
        movies:(_,{rating,limit})=>getMovies(limit,rating)
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

