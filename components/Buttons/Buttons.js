import React from 'react';

/**
 * Button with an icon and text
 * @param {*} props - variant, size, icon, tooltip, text
 * @returns - React Component
 */
export function Button(props){
    let style = `btn btn-outline-${props.variant} border-2 col-md-auto`;
    if(props.size){
        style += `btn-${props.size}`;
    }

    let icon = `fas fa-${props.icon}`;

    return (
        React.createElement(
            'button',
            {
                className: style,
                type: 'button',
                'data-bs-toggle':'tooltip',
                'data-bs-placement': 'bottom',
                title: props.tooltip
            },
            React.createElement('i', {className: icon}),
            React.createElement('strong', null, props.text)
        )
    );
}

/**
 * Button with an icon only
 * @param {*} props - variant, size, icon, tooltip
 * @returns - React Component
 */
export function IconButton(props){
    let style = `btn btn-outline-${props.variant} border-2 col-md-auto`;
    if(props.size){
        style += `btn-${props.size}`;
    }

    let icon = `fas fa-${props.icon}`;

    return (
        React.createElement(
            'button',
            {
                className: style,
                type: 'button',
                'data-bs-toggle':'tooltip',
                'data-bs-placement': 'bottom',
                title: props.tooltip
            },
            React.createElement('i', {className: icon})
        )
    );
}

/**
 * Button with a text only
 * @param {*} props - variant, size, tooltip, text
 * @returns - React Component
 */
export function TextButton(props){
    let style = `btn btn-outline-${props.variant} border-2 col-md-auto`;
    if(props.size){
        style += `btn-${props.size}`;
    }

    return (
        React.createElement(
            'button',
            {
                className: style,
                type: 'button',
                'data-bs-toggle':'tooltip',
                'data-bs-placement': 'bottom',
                title: props.tooltip
            },
            React.createElement('strong', null, props.text)
        )
    );
}