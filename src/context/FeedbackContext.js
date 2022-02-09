import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: 'This is Feedback Item 1',
            rating: 10
        },
        {
            id: 2, 
            text: 'This is Feedback Item 2',
            rating: 9
        },
        {
            id: 3, 
            text: 'This is Feedback Item 3',
            rating: 7
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id ));
            //High Order function which filters in based on the function, 
            //and makes a new data structure afterwards
            //the function is filtering out any item.id which === id
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback] );
    }
    //This function will update feedback item 
    
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, 
            ...updItem } : item))
        )

    }

    //This function will set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true
        })

    }

    return <FeedbackContext.Provider value={{
        feedback, //shorthand for feedback: 'feedback',
        feedbackEdit, //is the state that holds the edit
        deleteFeedback,
        addFeedback,
        editFeedback, //is the function that runs
        updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;