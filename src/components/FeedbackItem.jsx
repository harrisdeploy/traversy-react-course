import { useState } from 'react';
import Card from '../shared/Card';

import { FaTimes } from 'react-icons/fa';

import PropTypes from 'prop-types';

function FeedbackItem({item, handleDelete}) {
    /*
    const whenClicked = () => {
        setRating( (prev)=> {
            return prev+1;
        });
    } */
    return (
        <Card>{/*reverse={true}*/}
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)}
            className='close'>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={whenClicked}>Click me</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
