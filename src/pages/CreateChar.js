import React, {Component as RC, useContext, useState, useEffect} from 'react';
import Page from '../components/Page';
import {FormRow, TextField} from '../components/FormComponents';
import {MergedContext} from '../Context';

export default class CreateChar extends RC {
    constructor(props)
    {
        super(props);
        // eventually we will manage the form values with state
        this.state = {
            name: '',
            characterClass: '',
            race: '',
            player: '',
            classList: [],
            raceList: [],
        }
    }
    // this function simply takes an object with _id and name keys and
    // returns an option element
    optionMapper = (item) =>
    {
        return <option key={`option_${item._id}`} value={item._id}>{item.name}</option>
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        // do more stuff
    }
    // function populates our state with lists (for our dropdowns)
    makeLists = () =>
    {
        console.log('this.context: ', this.context);
        this.setState({
            classList: this.context.classes.map(this.optionMapper),
            raceList: this.context.races.map(this.optionMapper),
        })
    }
    componentDidMount()
    {
        this.makeLists();
    }
  
    render()
    {
        return (
            <Page>
              <h3>Create A Character</h3>
              <form className="create-form">
                <FormRow>
                  <TextField label="Character Name" name="name" />
                </FormRow>
                <FormRow>
                  <label>Character Class: </label>
                  <select name="characterClass">
                    <option>Choose a Class</option>
                    {this.state.classList}
                  </select>
                  <label>Character Race: </label>
                  <select name="race">
                    <option>Choose a Race</option>
                    {this.state.raceList}
                  </select>
                </FormRow>
        
                <input type="submit" value="Create" />
              </form>
            </Page>
          );
    }
  }
  CreateChar.contextType = MergedContext;
  