import React from 'react';
import Card from './Card';
import Genre from './Genre';
import axios from 'axios';
import {endpoints, getImageUrl} from '../config';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [],
            genres: [],
        };
    }

    componentDidMount() {
        axios
            .get(endpoints.mostPopularMovies())
            .then((data) => {
                this.setState({
                    list: data.data.results,
                });
            });

        axios
            .get(endpoints.genres())
            .then((data) => {
                this.setState({
                    genres: data.data.genres
                });
            });

    }

    setGenreMovies = id => {

        axios
            .get(endpoints.genreMovies(id))
            .then((data) => {
                this.setState({
                    list: data.data.results,
                });
            });

    };

    getTitle = (title) => {
        console.log(title);
    };

    render() {
        return (
            <div>
                {this.state.genres.map((genres) => (
                    <Genre
                        name={genres.name}
                        id={genres.id}
                        setGenreMovies={this.setGenreMovies}
                    />
                ))}

                {this.state.list.map((card) => (
                    <Card
                        getTitle={this.getTitle}
                        key={card.original_title}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        date={card.release_date}
                        rating={card.vote_average}
                        votes={card.vote_count}
                        description={card.overview}
                        title={card.original_title}
                    />
                ))}
            </div>
        );
    }
}

export default App;
