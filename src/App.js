import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import FeedbackData from './data/FeedbackData';


function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback] );
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id ));
            //High Order function which filters out based on the function, 
            //and makes a new data structure afterwards
            //the function is filtering out any item.id which === id

        }
    }
    return (
        <>
        <Header text="Hello World"/>
        <div className='container'>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App;

// function App() {
//     const title = 'My Title';
//     const body = 'My Body';

//     const commentsList = [
//         {id: '1', text: 'hello comment 1' },
//         {id: '2', text: 'hello comment 2' },
//         {id: '3', text: 'hello comment 3' },
//     ]

//     const loading = false, showComments = true;
    
//     if (loading) {
//         return (<h1>Loading...</h1>)
//     }

//     const commentBlock = (
//             <div className='comments'>
//                 <h3>Comments length: ({commentsList.length})</h3>
//                 <ul>
//                     {commentsList.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div> 
//     )

//     return (
//         <div className='container'>
//             <h1> {title.toUpperCase()} </h1>
//             <p>{body}</p>

//             {/*showComments ? (
//                 'showComments is set to true'
//                 ) 
//             : (
//                 'showComments is set to false'
//             )*/}
//             {/*showComments && (
//                 'showComments is set to true automatically lest set to false'
//                 ) 
//             */} 
    
//             {/*showComments && commentBlock
//             */} 

            
//             {showComments && commentBlock }
//         </div>
//     )
// }
