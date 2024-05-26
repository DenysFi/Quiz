import { tabType } from '@/Constants/enums';
import { Button } from '@douyinfe/semi-ui';
import { FC } from 'react'

interface IQuizEnd {
    restartQuiz: () => void
    setActiveTabOnFinish?: (key: tabType) => void
}

const QuizEnd: FC<IQuizEnd> = ({ restartQuiz, setActiveTabOnFinish }) => {
    return (
        <div className=' rounded bg-teal-100 p-3 h-60 flex justify-center items-center font-bold text-2xl flex-col'>
            <h4>Congratulation! You finished quiz!🥂</h4>
            <div className='flex gap-x-2 mt-5'>
                <Button onClick={restartQuiz}>Restart</Button>
                <Button onClick={() => setActiveTabOnFinish && setActiveTabOnFinish(tabType.result)}>Show result</Button>
            </div>
        </div>
    )
};
export default QuizEnd;