import { ComponentPropsWithoutRef, FC } from 'react';
import { useQuizContext } from './QuizProvider';

interface IQuizQuestionProgress extends ComponentPropsWithoutRef<'p'> { }

const QuizQuestionProgress: FC<IQuizQuestionProgress> = () => {
    const props = useQuizContext()
    return (
        <p className='text-lg'>Question {props.currentQuestionIndex + 1} of {props.questions.length}</p>
    )
};
export default QuizQuestionProgress;