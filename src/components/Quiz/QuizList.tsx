import { IAnswered, IAnsweredValues, ICorrectAnswer } from '@/Types/QuizTypes';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useQuizContext } from './QuizProvider';
import QuizQuestion from './QuizQuestion';
import QuizQuestionTitle from './QuizQuestionTitle';

interface IQuizList extends ComponentPropsWithoutRef<'div'> {
    userAnswers: (IAnsweredValues & IAnswered)[]
}

const QuizList: FC<IQuizList> = ({ userAnswers }) => {
    const props = useQuizContext();

    const correctAnswers: ICorrectAnswer[] = props.questions.map(q => ({
        qid: q.qid,
        questionType: q.questionType,
        answers: q.answers.map((answ, i) =>
            answ.isCorrect && ({ id: i, ...answ })
        ).filter(Boolean) 
    })as ICorrectAnswer);

    return (
        <div className=' mb-44'>
            {
                props.questions.map((q) => {
                    const userAnswer = userAnswers.find(answ => answ.id === q.qid)
                    const ca = correctAnswers.filter((q: ICorrectAnswer) => userAnswer?.id === q.qid);
                    return (
                        <div className='mb-4' key={q.qid}>
                            <QuizQuestionTitle title={q.questionText} />
                            <QuizQuestion answers={q.answers} qType={q.questionType} key={q.qid} userAnswer={userAnswer} correctAnswers={ca} />
                        </div>
                    )
                })
            }
        </div>
    )
};
export default QuizList;