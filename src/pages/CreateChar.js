import React, {Component as RC} from 'react';
import Page from '../components/Page';

export default class CreateChar extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <Page>
                <h3>Create A Character</h3>
                <form>
                    <label>Character Name: </label><input name="characterName" />
                    <label>Character Class: </label>
                    <select name="characterClass">
                        <option>Choose a Class</option>
                    </select>
                    <label>Character Race: </label>
                    <select name="race">
                        <option>Choose a Race</option>
                    </select>
                    <input type="submit" value="Create" />


                </form>
            </Page>
        )
    }
}