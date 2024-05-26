import { ComponentPropsWithoutRef, FC } from 'react'
import { useQuizContext } from './QuizProvider';
import { questionType } from '@/Constants/enums';

interface IQuizQuestionTitle extends ComponentPropsWithoutRef<'h4'> {
    title?: string,
    qType?: questionType
}
const QuizQuestionTitle: FC<IQuizQuestionTitle> = ({ title, qType }) => {
    const props = useQuizContext();
    const currentTitle = title || props.currentQuestion.questionText;
    const currentQType = qType || props.currentQuestion.questionType;
    return (
        <h4 className=' text-2xl font-medium pb-2 pt-2'>{currentTitle} {currentQType === questionType.multipleChoice && "(Select all that apply)"}</h4>
    )
};
export default QuizQuestionTitle;