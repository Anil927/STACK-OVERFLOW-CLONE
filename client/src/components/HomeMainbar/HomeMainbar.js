import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

    var questionList = [
        {
            id: 1,
            votes: 3,
            noOfAnswers: 2,
            questionTitle: "How to use React Router?",
            questionBody: "I am new to React and I am trying to use React Router. I have installed it using npm install react-router-dom and I am trying to use it in my project. But I am getting an error saying that the module is not found. Can anyone help me with this?",
            questionTags: ["react", "react-router", "npm"],
            userPosted: "John Doe",
            askedOn: "jan 3",
        },{
            id: 2,
            votes: 3,
            noOfAnswers: 2,
            questionTitle: "How to use React Router?",
            questionBody: "I am new to React and I am trying to use React Router. I have installed it using npm install react-router-dom and I am trying to use it in my project. But I am getting an error saying that the module is not found. Can anyone help me with this?",
            questionTags: ["react", "react-router", "npm"],
            userPosted: "John Doe",
            askedOn: "jan 3",
        },{
            id: 3,
            votes: 3,
            noOfAnswers: 2,
            questionTitle: "How to use React Router?",
            questionBody: "I am new to React and I am trying to use React Router. I have installed it using npm install react-router-dom and I am trying to use it in my project. But I am getting an error saying that the module is not found. Can anyone help me with this?",
            questionTags: ["react", "react-router", "npm"],
            userPosted: "John Doe",
            askedOn: "jan 3",
        }

    ]

    return (
        <div className='main-bar'>
            <div className="main-bar-header">
                {
                    useLocation().pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link>
            </div>
            <div>
                {
                    questionList === null ? 
                    <h2>Loading...</h2> :
                    <>
                        <p>{questionList.length} questions</p>
                        <QuestionList questionList={questionList} />
                    </>
                }
            </div>
        </div>
    );
}

export default HomeMainbar
