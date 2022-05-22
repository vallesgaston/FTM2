import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getMovieDetail(id);
    }

    componentWillUnmount(){
        this.props.getMovieDetail();
    }

    render() {
        return (
            <div className="movie-detail">
                { this.props.movies === undefined ? (
                    <>
                        <h2>Cargando..</h2>
                    </>
                ) : this.props.movies === null ? (
                    <>
                        <h2>No se encontro el titulo</h2>
                    </>
                ): (
                    <>
                        <h1>{this.props.movies.Title}</h1>
                        <img src={this.props.movies.Poster} alt={`Imagen de ${this.props.movies.Title}`} />
                        <h3>AÑO: {this.props.movies.Year}</h3>
                    </>
                    )
                }
            </div>
        );
    }
}



export default connect((state)=>({movies: state.movieDetail}), {getMovieDetail})(Movie);