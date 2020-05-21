import React, {Component as RC} from 'react';
import './Banner.scss';

export default class Banner extends RC {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        let bannerStyle;
        if (this.props.image)
        {
            bannerStyle = {
                backgroundImage: `url(${this.props.image})`,
            };
        }
        return(
            <section className="banner" style={bannerStyle}>
                <h2 className="banner-title">{this.props.title}</h2>
                <p className="banner-content">{this.props.content}</p>
            </section>
        )
    }
}