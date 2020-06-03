import React from 'react';
import './BioBlock.scss'

export default function BioBlock(props) {
    return (
        <div className="bio-block">
            <div className="bio-pic" style={{backgroundImage: `url(${props.pic})`}}>{' '}</div>
            <div className="bio-blurb">
                {props.blurb}
            </div>
        </div>
    )
}