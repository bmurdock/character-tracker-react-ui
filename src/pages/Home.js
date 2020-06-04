import React, {Component as RC} from 'react';
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
    fetchCharacters = () =>
    {
        let route = 'http://localhost:3020/api/characters';
        fetch(route)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {
            // do somethign with the data
            this.setState({
                characters: data,
                charList: data.map((character, i) =>
                {   
                    return <li key={`char_${i}`}>{character.name}</li>
                }),
            });
        })
        .catch((err) =>
        {
            console.log('Error fetching characters: ', err);
        });
    }
    componentDidMount() {
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
