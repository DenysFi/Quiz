import { Button } from '@douyinfe/semi-ui';
import { ComponentPropsWithoutRef, FC } from 'react'
import { useQuizContext } from './QuizProvider';

interface IQuizButtonPrev extends ComponentPropsWithoutRef<'button'> { }

const QuizButtonPrev: FC<IQuizButtonPrev> = () => {
    const props = useQuizContext()
    return (
        <Button theme="solid" onClick={() => props.setCurrentQuestionIndex(prev => prev - 1 >= 0 ? prev - 1 : prev)}>Prev</Button>

    )
};
export default QuizButtonPrev;