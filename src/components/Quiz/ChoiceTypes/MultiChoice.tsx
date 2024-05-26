import { IAnswer, ICorrectAnswer } from '@/Types/QuizTypes';
import { Checkbox, CheckboxGroup } from '@douyinfe/semi-ui';
import { CheckboxEvent } from '@douyinfe/semi-ui/lib/es/checkbox';
import { FC, ReactElement } from 'react';
import { useQuizContext } from '../QuizProvider';

interface IMultiChoice {
    data: IAnswer[],
    correctAnswer?: ICorrectAnswer[]
    userAnswer?: number[];
}
const MultiChoice: FC<IMultiChoice> = ({ data, correctAnswer, userAnswer }) => {
    const props = useQuizContext()

    function getSingleChoiceType(): ReactElement {
        if (props.disabled) {

            return <div className='flex flex-col gap-y-[12px]'>
                {
                    data.map((q, i) => {
                        const ca = correctAnswer![0]?.answers;
                        const classes = (ca?.some(a => a.id === i)) ? 'rgb(163 230 53)' : 'rgb(225 29 72)'

                        return <Checkbox
                            key={i}
                            className='font-medium '
                            checked={userAnswer?.includes(i)}
                            value={i}><p className='text-lg'>
                                <span style={{ color: classes }}>
                                    {q.answerText}</span></p></Checkbox>
                    })
                }
            </div>
        } else {
            return (
                <CheckboxGroup disabled={props.disabled} style={{ width: '100%' }} onChange={sel => props.setChoice({ answerIds: sel })} defaultValue={props.prevAnswer?.answerIds}>
                    {data.map((q, i) =>
                        <Checkbox
                            onChange={(e: CheckboxEvent) => props.setChoice({ answerId: e.target.value })}
                            key={i}
                            className='font-medium '
                            value={i}><p className='text-lg'>{q.answerText}</p></Checkbox>
                    )}
                </CheckboxGroup>)
        }
    }

    return (
        <>
            {getSingleChoiceType()}
        </>
    )
};
export default MultiChoice;