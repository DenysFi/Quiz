import { IQuiz } from "@/Types/QuizTypes";
import { questionType } from "./enums";

export const defaultQuiz: IQuiz = {
    quizTitle: "React Quiz",
    questions: [
        {
            qid: 0,
            questionText: "What is React?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "A programming language", isCorrect: false },
                { answerText: "A JavaScript library for building user interfaces", isCorrect: true },
                { answerText: "A database", isCorrect: false },
                { answerText: "A CSS framework", isCorrect: false },
            ],
        },
        {
            qid: 1,
            questionText: "Who developed React?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "Google", isCorrect: false },
                { answerText: "Microsoft", isCorrect: false },
                { answerText: "Facebook", isCorrect: true },
                { answerText: "Twitter", isCorrect: false },
            ],
        },
        {
            qid: 2,
            questionText: "What is a component in React?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "A reusable piece of UI", isCorrect: true },
                { answerText: "A CSS class", isCorrect: false },
                { answerText: "A JavaScript function", isCorrect: false },
                { answerText: "A HTML element", isCorrect: false },
            ],
        },
        {
            qid: 3,
            questionText: "How do you create a functional component in React?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "function MyComponent() {}", isCorrect: true },
                { answerText: "class MyComponent extends React.Component {}", isCorrect: false },
                { answerText: "const MyComponent = new Component()", isCorrect: false },
                { answerText: "function Component() {}", isCorrect: false },
            ],
        },
        {
            qid: 4,
            questionText: "What hook is used to manage state in a functional component?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "useState", isCorrect: true },
                { answerText: "useEffect", isCorrect: false },
                { answerText: "useContext", isCorrect: false },
                { answerText: "useReducer", isCorrect: false },
            ],
        },
        {
            qid: 5,
            questionText: "What is JSX?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "A syntax extension for JavaScript", isCorrect: true },
                { answerText: "A CSS preprocessor", isCorrect: false },
                { answerText: "A type of database query", isCorrect: false },
                { answerText: "A method for managing state", isCorrect: false },
            ],
        },
        {
            qid: 6,
            questionText: "What does the useEffect hook do?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "Handles side effects in a functional component", isCorrect: true },
                { answerText: "Manages state", isCorrect: false },
                { answerText: "Fetches data", isCorrect: false },
                { answerText: "Renders components", isCorrect: false },
            ],
        },
        {
            qid: 7,
            questionText: "How do you pass data to a child component?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "Using state", isCorrect: false },
                { answerText: "Using props", isCorrect: true },
                { answerText: "Using context", isCorrect: false },
                { answerText: "Using hooks", isCorrect: false },
            ],
        },
        {
            qid: 8,
            questionText: "What is the purpose of a key in React lists?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "To identify each element uniquely", isCorrect: true },
                { answerText: "To apply styles", isCorrect: false },
                { answerText: "To manage state", isCorrect: false },
                { answerText: "To handle events", isCorrect: false },
            ],
        },
        {
            qid: 9,
            questionText: "What is React Router used for?",
            questionType: questionType.singleChoice,
            maxScore: 1,
            answers: [
                { answerText: "To manage state", isCorrect: false },
                { answerText: "To handle HTTP requests", isCorrect: false },
                { answerText: "To route between different components", isCorrect: true },
                { answerText: "To apply styles", isCorrect: false },
            ],
        },
        {
            qid: 10,
            questionText: "Which of the following hooks can be used to manage side effects in a functional component? ",
            questionType: questionType.multipleChoice,
            maxScore: 2,
            answers: [
                { answerText: "useEffect", isCorrect: true },
                { answerText: "useState", isCorrect: false },
                { answerText: "useLayoutEffect", isCorrect: true },
                { answerText: "useReducer", isCorrect: false },
            ],
        },
        {
            qid: 11,
            questionText: "Which of the following are lifecycle methods in class components? ",
            questionType: questionType.multipleChoice,
            maxScore: 2,
            answers: [
                { answerText: "componentDidMount", isCorrect: true },
                { answerText: "useState", isCorrect: false },
                { answerText: "componentDidUpdate", isCorrect: true },
                { answerText: "useEffect", isCorrect: false },
            ],
        },
        {
            qid: 12,
            questionText: "What hook is responsible for state?",
            questionType: questionType.text,
            maxScore: 1,
            answers: [
                { answerText: "useState", isCorrect: true },
            ],
        }
    ],
};
