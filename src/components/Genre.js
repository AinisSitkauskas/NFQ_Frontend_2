import React from 'react';

export default class Genre extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {name, id, setGenreMovies} = this.props;
        return (
            <button className="name" onClick={movie => setGenreMovies(id)}> {name}</button>
        );
    }
}