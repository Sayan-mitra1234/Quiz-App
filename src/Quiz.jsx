import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css"

const QuizGame=()=>{

    const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: 'Kolkata', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Indore', isCorrect: false },
			],
		},
		{
			questionText: ' Which is the coldest location in the earth?',
			answerOptions: [
				{ answerText: 'West Antarctica', isCorrect: false },
				{ answerText: 'East Antarctica', isCorrect: true },
				{ answerText: 'Nepal', isCorrect: false },
				{ answerText: 'Switzerland', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: ' Which is the highest peak in India?',
			answerOptions: [
				{ answerText: 'Kamet Peak', isCorrect: false },
				{ answerText: 'Kangchenjunga Peak', isCorrect: false },
				{ answerText: 'Mount K2', isCorrect: false },
				{ answerText: 'Mount Everest', isCorrect: true },
			],
		},
        {
			questionText: 'Which is the fastest animal on land?',
			answerOptions: [
				{ answerText: 'Fox', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Cheetah ', isCorrect: true },
			],
		},
        {
			questionText: 'Which is the largest state of India?',
			answerOptions: [
				{ answerText: 'Gujrat', isCorrect: false },
				{ answerText: 'Tamilnadu', isCorrect: false },
				{ answerText: 'West Bengal', isCorrect: false },
				{ answerText: 'Rajashtan', isCorrect: true },
			],
		},
        {
			questionText: ' Which is the smallest continent in the world?',
			answerOptions: [
                { answerText: 'Australia', isCorrect: true },
				{ answerText: 'Africa', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'England', isCorrect: false },
				
			],
		},
        {
			questionText: 'How many times has India won the Cricket World Cup?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},
        {
			questionText: 'Who was the first Indian batsman to hit a century in a Test match?',
			answerOptions: [
				{ answerText: 'Sunil Gavaskar', isCorrect: false },
				{ answerText: 'Vijay Hazare', isCorrect: false },
                { answerText: 'Lala Amarnath Bharadwaj', isCorrect: true },
				{ answerText: 'Kapil Dev', isCorrect: false },
				
			],
		},
        {
			questionText: 'What color does yellow and green make?',
			answerOptions: [
                { answerText: 'Lime', isCorrect: true },
				{ answerText: 'Maroon', isCorrect: false },
				{ answerText: 'Ocean mist', isCorrect: false },
				{ answerText: 'Tangerine', isCorrect: false },
				
			],
		},
        {
			questionText: 'National Income estimates in India are prepared by?',
			answerOptions: [
				{ answerText: 'Planning Commission', isCorrect: false },
				{ answerText: 'Reserve Bank of India', isCorrect: false },
                { answerText: 'Central statistical', isCorrect: true },
				{ answerText: 'Indian statistical Institute', isCorrect: false },
				
			],
		},
        {
			questionText: 'Which of the following is used in React.js to increase performance?',
			answerOptions: [
				{ answerText: 'Original DOM', isCorrect: false },
                { answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'Both', isCorrect: false },
				{ answerText: 'None of Above', isCorrect: false },
			
			],
		},
        {
			questionText: 'Identify the one which is used to pass data to components from outside?',
			answerOptions: [
				{ answerText: 'Render with arguments', isCorrect: false },
				{ answerText: 'setState', isCorrect: false },
				{ answerText: 'proptypes', isCorrect: false },
				{ answerText: 'props', isCorrect: true },
			],
		},
        {
			questionText: 'Which is the longest river in India?',
			answerOptions: [
				{ answerText: 'Narmada', isCorrect: false },
				{ answerText: 'Ganga', isCorrect: true },
				{ answerText: 'Damoder', isCorrect: false },
				{ answerText: 'Bhagirath', isCorrect: false },
			],
		},
        {
			questionText: 'Which is the largest country in the world (By area)?',
			answerOptions: [
				{ answerText: 'America', isCorrect: false },
				{ answerText: 'Pakistan', isCorrect: false },
                { answerText: 'Russia', isCorrect: true },
				{ answerText: 'India', isCorrect: false },
				
			],
		},
        {
			questionText: 'Which animal is known as the ‘Ship of the Desert"?',
			answerOptions: [
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Giraffe', isCorrect: false },
				{ answerText: 'Sheep', isCorrect: false },
				{ answerText: 'Camel', isCorrect: true },
			],
		},
        {
			questionText: 'Javascript is an _______ language?',
			answerOptions: [
                { answerText: 'Object-oriented', isCorrect: true },
				{ answerText: 'Object-Based', isCorrect: false },
				{ answerText: 'Both', isCorrect: false },
				{ answerText: 'None of above', isCorrect: false },
			
			],
		},
        {
			questionText: 'Which of the following methods is used to access HTML elements using Javascript?',
			answerOptions: [
				{ answerText: 'getElementbyID()', isCorrect: false },
				{ answerText: 'getElementbyClassName()', isCorrect: false },
				{ answerText: 'None of Above', isCorrect: false },
				{ answerText: 'Both A & B', isCorrect: true },
			],
		},
        {
			questionText: 'How can a datatype be declared to be a constant type?',
			answerOptions: [
				{ answerText: 'Constant', isCorrect: false },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'var', isCorrect: false },
				{ answerText: 'Const', isCorrect: true },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const resetQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0)
        setShowScore(false)
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <>
                        <button type="submit" onClick={resetQuiz}>Play Again!!</button><br />
						<button> <Link to="/">
            Return to Homepage
          </Link></button>
                    </>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default QuizGame;