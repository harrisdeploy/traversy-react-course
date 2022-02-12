import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
// import { useState } from 'react';
import {
    BrowserRouter as Router,
    Link, //test
    Routes,
    Route
} from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutIconLink from './shared/AboutIconLink';

// import FeedbackData from './data/FeedbackData';

import AboutPage from './pages/AboutPage';

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData);
    //this is a hook, 'useState()', setting the state within a functional component, 
    //which otherwise wouldn't have been able to traditionally. 
    //feedback is the data,setFeedback is the function (i.e. to set data into the state)

    return (
        <FeedbackProvider>
                <Header text="Hello World"/>
                <Routes>
                    <Route path="/" element={
                        <div className='container'>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </div>
                    } />
                    {/*<Route path="/" element={<App />}/>*/}
                    <Route path="about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
        </FeedbackProvider>
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
