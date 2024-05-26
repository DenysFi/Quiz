import { questionType } from '@/Constants/enums';
import { IAnswer, IAnswered, IAnsweredValues, ICorrectAnswer } from '@/Types/QuizTypes';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useQuizContext } from './QuizProvider';

interface IQuizQuestion extends ComponentPropsWithoutRef<'div'> {
    answers?: IAnswer[],
    qType?: questionType,
    k?: number
    correctAnswers?: ICorrectAnswer[],
    userAnswer?: (IAnsweredValues & IAnswered)
}

const QuizQuestion: FC<IQuizQuestion> = ({ children, answers, qType, k, userAnswer, correctAnswers }) => {
    const props = useQuizContext();
    const currentAnsw = answers || props.currentQuestion.answers;
    const currentType = qType || props.currentQuestion.questionType
    const key = k || props.currentQuestionIndex
    return (
        <div className='mt-4'>
            <div className=' rounded bg-teal-100 p-3'>
                {props.getQuestionComponent({ type: currentType, data: currentAnsw, key, userAnswer, correctAnswers })}
                {children}
            </div>
        </div>
    )
};
export default QuizQuestion;