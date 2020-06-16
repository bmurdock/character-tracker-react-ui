import React, {Component as RC} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';
import Page from '../components/Page';
import {MergedContext} from '../Context';
import './Home.scss';

export default class Home extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            characers: [],
            charList: null,
        };
    }
    deleteMe = (event) =>
    {
        const character = event.target.getAttribute('character');
        let route = `${config.apiPath}/api/characters/${character}`;
        const fetchOptions = {
            method: 'DELETE',
        };
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {
            console.log('should have deleted: ', data);
            this.fetchCharacters();
        })
        .catch((err) =>
        {
            console.log('Error deleting character: ', err);
        })
    }
    fetchCharacters = () =>
    {
        let route = `${config.apiPath}/api/characters`;
        fetch(route)
        .then((response) =>
        {
            // waits for the entire response stream
            // returns parsed json from the stream
            return response.json();
        })
        .then((data) =>
        {
            // do somethign with the data
            this.setState({
                characters: data,
                charList: data.map((character) =>
                {   
                    return (
                    <li key={`char_${character._id}`}>
                        <Link to={{pathname: '/create-character', charId: character._id}}>{character.name}</Link>
                        <button onClick={this.deleteMe} character={character._id}>x</button>
                    </li>
                    )
                }),
            });
        })
        .catch((err) =>
        {
            console.log('Error fetching characters: ', err);
        });
    }
    componentDidMount() {
        console.log('my context: ', this.context);
        this.fetchCharacters();
    }
    render()
    {
        let user = this.context.loggedInUser;
        return(
            <Page>
                <section className="profile-page constrain">
                    <section className="player-info">
                        <h3 className="player-name">{user.displayName}</h3>
                    </section>
                    <div>
                        <h3>My Characters</h3>
                        <ul>
                            {this.state.charList}
                        </ul>
                    </div>
                </section>
            </Page>
        )
    }
}
Home.contextType = MergedContext;
