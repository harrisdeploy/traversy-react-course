import React from 'react';
import propTypes from 'prop-types';


function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor,
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>Feedback UI</h2>
                <p> {text} </p>
            </div>
        </header>
    )
}

Header.defaultProps = {//can pass in default props automatically
    text: 'Feedback UI', 
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {//this is making sure there's a specific type to each prop- 
    //'type jacking', typescript doesn't require this
    text: propTypes.string, 
    bgColor: propTypes.string, 
    textColor: propTypes.string,
}


export default Header
