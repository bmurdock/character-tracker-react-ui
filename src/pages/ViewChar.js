import React, {Component as RC} from 'react';

// number of ms in 1 year
const YEAR = 1000 * 60 * 60 * 24 * 365;
export default class ViewChar extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            bday: '',
            tax: '',
        };
    }

    handleChange = (event) =>
    {  
        this.setState({
            bday: event.target.value
        }, this.calculateTax);  
    }

    calculateTax = () =>
    {
        let tax = Math.round((Date.now() - this.state.bday.getTime() / YEAR) * 3);
        this.setState({
            tax
        })
    }
    render()
    {
        return(
            <div>

            </div>
        )
    }
}