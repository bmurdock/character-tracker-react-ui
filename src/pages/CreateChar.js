import React, {Component as RC, useContext, useState, useEffect} from 'react';
import Page from '../components/Page';
import {FormRow, TextField, SelectField} from '../components/FormComponents';
import {MergedContext} from '../Context';
import Constraint from '../components/Constraint';

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
            feedbackMessage: '',
            feedbackType: '',
        }
    }
    // this function simply takes an object with _id and name keys and
    // returns an option element
    optionMapper = (item) =>
    {
        return <option key={`option_${item._id}`} value={item._id}>{item.name}</option>
    }

    mongoValdiationHandler = (errors) =>
    {
        const keys = Object.keys(errors);
        return `Invalid value for fields: ${keys.join(' ')}`;
    }
    handleSubmit = (event) =>
    {
        event.preventDefault();
        // fields to submit
        const fts = ['name', 'characterClass', 'race', 'player'];
        const submitData = {};
        for (let i = 0; i < fts.length; i++)
        {
            const field = fts[i];
            submitData[field] = this.state[field];
        }
        const fetchOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(submitData),
        };
        const route = 'http://localhost:3020/api/characters'
        fetch(route, fetchOptions)
        .then((response) =>
        {
            return response.json();
        })
        .then((data) =>
        {

            // if the data has an err
            if (typeof data.err !== 'undefined' && data.err.name === "ValidationError")
            {
                this.setState({
                    feedbackMessage: `Ooops! ${this.mongoValdiationHandler(data.err.errors)}`,
                    feedbackType: 'feedback-bad',
                });
                return;
            }
            // inform the user if it worked
            this.setState(
                {
                    feedbackMessage: 'Success!',
                    feedbackType: 'feedback-good',
                }
            );
        })
        .catch((err) =>
        {
            console.log('Error posting character data: ', err);
            // inform the user that there is an error???
            this.setState({
                feedbackMessage: 'Oops!',
                feedbackType: 'feedback-bad',
            });
        });
    }
    // function populates our state with lists (for our dropdowns)
    makeLists = () =>
    {
        this.setState({
            classList: this.context.classes.map(this.optionMapper),
            raceList: this.context.races.map(this.optionMapper),
        });
    }
    componentDidMount()
    {
        this.makeLists();
        this.setState({
            player: this.context.loggedInUser._id,
        })
    }
    changeHandler = (event) =>
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        stateObj.feedbackMessage = '';
        stateObj.feedbackType = '';
        this.setState(stateObj);
    }
  
    render()
    {
        return (
            <Page>
                <Constraint width='50vw'>
                    <h3>Create A Character</h3>
                    <form className="create-form" onSubmit={this.handleSubmit}>
                        <FormRow>
                        <TextField label="Character Name" name="name" value={this.state.name} changeHandler={this.changeHandler} />
                        </FormRow>
                        <FormRow>
                        <SelectField 
                            name="characterClass"
                            label="Character Class"
                            options={this.state.classList}
                            changeHandler={this.changeHandler}
                            />
                        <SelectField 
                            name="race"
                            label="Race"
                            options={this.state.raceList}
                            changeHandler={this.changeHandler}
                            />     
                        </FormRow>
                        <input type='hidden' value={this.state.player} />
                        <input type="submit" value="Create" />
                    </form>
                    <div className={`feedback ${this.state.feedbackType}`}>
                        {this.state.feedbackMessage}
                    </div>
                </Constraint>
            </Page>
          );
    }
  }
  CreateChar.contextType = MergedContext;
  