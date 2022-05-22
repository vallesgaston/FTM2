import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from '../actions'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  export default function reducer(state = initialState, action){
      switch(action.type){
          case GET_MOVIES: 
            return{ 
              ...state, 
              moviesLoaded: action.payload.Search 
            };
          case GET_MOVIE_DETAIL: 
            return{ 
              ...state, 
              movieDetail: action.payload 
            };
          case ADD_MOVIE_FAVORITE: 
            return{ 
              ...state, 
              moviesFavourites: [...state.moviesFavourites, action.payload] };
          case REMOVE_MOVIE_FAVORITE: 
            return{ 
              ...state, 
              moviesFavourites: state.moviesFavourites.filter(
                ({imdbID})=>imdbID !== action.payload
                ) 
            };
          default: 
            return state;
      }
  }