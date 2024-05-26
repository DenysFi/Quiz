import { Button } from '@douyinfe/semi-ui';
import { ComponentPropsWithoutRef, FC } from 'react';
import { useQuizContext } from './QuizProvider';

interface IQuizButtonNext extends ComponentPropsWithoutRef<'button'> { }

const QuizButtonNext: FC<IQuizButtonNext> = () => {
    const props = useQuizContext()
    return (
        <Button theme="solid" onClick={props.handleNextButton}>{props.currentQuestionIndex === props.questions.length - 1 ? 'Finish' : 'Next'}</Button>
    )
};
export default QuizButtonNext;