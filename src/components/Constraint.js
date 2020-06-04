import React from 'react';

// this component will act as a wrapper that constrains
// the size of whatever it contains (and centers it horizontally)
export default function Constraint(props)
{
    return (
        <section style={{margin: '0 auto', maxWidth: props.width || '95%'}}>
            {props.children}
        </section>
    )
}