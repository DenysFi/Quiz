import { Input } from '@douyinfe/semi-ui';
import { FC, ReactElement } from 'react';
import { useQuizContext } from '../QuizProvider';
import { ICorrectAnswer } from '@/Types/QuizTypes';

interface ITextChoice {
    correctAnswer?: ICorrectAnswer[],
    userAnswer?: string
}

const TextChoice: FC<ITextChoice> = ({ correctAnswer, userAnswer }) => {
    const props = useQuizContext()


    function getSingleChoiceType(): ReactElement {
        if (props.disabled) {
            const isCorrect = (correctAnswer && correctAnswer[0]?.answers![0].answerText.toLowerCase() === userAnswer?.toLowerCase())
            return <Input
                className={`${isCorrect ? 'border-lime-400' : 'border-2 border-rose-500'}`}
                value={userAnswer}></Input>
        } else {
            return (<Input
                disabled={props.disabled}
                defaultValue={userAnswer || props.prevAnswer?.textAnswer}
                onChange={(value) => props.setChoice({ textAnswer: value })}></Input>)
        }
    }



    return (
        getSingleChoiceType()
    )
};
export default TextChoice;