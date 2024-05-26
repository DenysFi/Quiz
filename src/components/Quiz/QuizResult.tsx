import { ComponentPropsWithoutRef, FC } from 'react'
import { useQuizContext } from './QuizProvider';

interface IQuizRezult extends ComponentPropsWithoutRef<'div'> {
    totalPoints: number[]
}

const QuizRezult: FC<IQuizRezult> = ({ totalPoints }) => {
    const { questions } = useQuizContext();
    const [points, maxPoint, correctAnswersCount] = totalPoints;
    return (
        <div>
            <h5>Your result:</h5>
            <p>Correct answers: {correctAnswersCount} of {questions.length}</p>
            <p>Total points: {points} of {maxPoint}</p>
        </div>
    )
};
export default QuizRezult;