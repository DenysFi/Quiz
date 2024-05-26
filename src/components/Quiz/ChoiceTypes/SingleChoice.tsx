import { IAnswer, ICorrectAnswer } from '@/Types/QuizTypes';
import { Radio, RadioGroup } from '@douyinfe/semi-ui';
import { RadioChangeEvent } from '@douyinfe/semi-ui/lib/es/radio';
import { FC, ReactElement } from 'react';
import { useQuizContext } from '../QuizProvider';

interface ISingleChoice {
    data: IAnswer[],
    correctAnswers?: ICorrectAnswer[]
    userAnswer?: number;
}

const SingleChoice: FC<ISingleChoice> = ({ data, correctAnswers, userAnswer }) => {
    const props = useQuizContext();
    const caid = correctAnswers?.length && correctAnswers[0].answers![0].id;

    function getSingleChoiceType(): ReactElement {
        if (props.disabled) {
            return <div className='flex flex-col gap-y-[12px]'>
                {
                    data.map((q, i) =>
                        <Radio
                            onChange={(e: RadioChangeEvent) => props.setChoice({ answerId: e.target.value })}
                            key={i}
                            checked={(userAnswer === i)}
                            className='font-medium text-lg flex items-center'
                            value={i}>
                            <span
                                style={(caid === i) ?
                                    { color: 'rgb(163 230 53)' } : userAnswer === i ?
                                        { color: 'rgb(225 29 72)' } : {}}>{q.answerText}</span> </Radio>
                    )
                }
            </div>
        } else {
            return (<RadioGroup direction="vertical" defaultValue={props.prevAnswer?.answerId}>
                {data.map((q, i) => {
                    return <Radio
                        onChange={(e: RadioChangeEvent) => props.setChoice({ answerId: e.target.value })}
                        key={i}
                        className='font-medium text-lg flex items-center'
                        value={i}>{q.answerText}</Radio>
                })}

            </RadioGroup>)
        }
    }

    return (
        <>
            {getSingleChoiceType()}
        </>
    )
};
export default SingleChoice;