import React, {Component as RC} from 'react';

export default class Footer extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <footer className="main-footer">
                Created By: Brian Murdock 2020
            </footer>
        )
    }
}