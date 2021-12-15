import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

function App() {
    return (
        <div className='container'>
            <h1> My App </h1>
        </div>
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
