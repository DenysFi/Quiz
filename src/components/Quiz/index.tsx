
import { questionType, tabType } from '@/Constants/enums';
import { IAnswered, IAnsweredValues, IGetQuestionComponentProps, IQuestion, IQuiz } from '@/Types/QuizTypes';
import { countTotalPoints } from '@/Utiles';
import { ComponentPropsWithoutRef, FC, ReactElement, useEffect, useState } from 'react';
import MultiChoice from './ChoiceTypes/MultiChoice';
import SingleChoice from './ChoiceTypes/SingleChoice';
import TextChoice from './ChoiceTypes/TextChoice';
import QuizButtonNext from './QuizButtonNext';
import QuizButtonPrev from './QuizButtonPrev';
import QuizEnd from './QuizEnd';
import QuizList from './QuizList';
import { QuizContext } from './QuizProvider';
import QuizQuestion from './QuizQuestion';
import QuizQuestionProgress from './QuizQuestionProgress';
import QuizQuestionTitle from './QuizQuestionTitle';
import QuizRezult from './QuizResult';

interface IQuizProp extends ComponentPropsWithoutRef<'section'> {
    disabled?: boolean,
    afterFinish?: boolean,
    quizData: IQuiz
    setActiveTabOnFinish?: (key: tabType) => void,
    setUserAnswers?: (value: (IAnsweredValues & IAnswered)[]) => void,
    userAnswers?: (IAnsweredValues & IAnswered)[];
    setQuizFinished?: (value: boolean) => void,
    quizFinished?: boolean,
    setTotalPoints?: (values: number[]) => void,
}

const QuizComponent: FC<IQuizProp> = ({
    children,
    disabled = false,
    afterFinish = true,
    setActiveTabOnFinish,
    quizData,
    userAnswers = [],
    setUserAnswers = () => { },
    setQuizFinished,
    quizFinished = false,
    setTotalPoints

}) => {
    const [questions, setquestions] = useState<IQuestion[]>(quizData.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [choice, setChoice] = useState<IAnsweredValues | null>();
    const currentQuestion = questions[currentQuestionIndex];
    const currentQuestionId = currentQuestion.qid
    const prevAnswer = userAnswers.find(answ => answ.id === currentQuestionId);


    function handleNextButton() {
        if (currentQuestionIndex > questions.length - 1) return;
        const newAnswer = { id: currentQuestionId, questionType: currentQuestion.questionType, ...choice }
        setCurrentQuestionIndex(prev => prev + 1 < questions.length ? prev + 1 : prev)
        let newUserAnswers: (IAnsweredValues & IAnswered)[];
        if (prevAnswer !== undefined && choice) {
            newUserAnswers = [...userAnswers];
            newUserAnswers.splice(prevAnswer.id, 1, newAnswer)
        } else {
            newUserAnswers = [...userAnswers, newAnswer];
        }

        setChoice(null)
        setUserAnswers(newUserAnswers)
    }

    function restartQuiz() {
        setQuizFinished && setQuizFinished(false);
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setTotalPoints && setTotalPoints([0, 0, 0])
    }

    useEffect(() => {
        const lastAnsw = !!userAnswers.find(answ => answ.id === currentQuestionId && currentQuestionIndex === questions.length - 1)
        if (lastAnsw) {
            setTotalPoints && setTotalPoints(countTotalPoints(questions, userAnswers));
            setQuizFinished && setQuizFinished(true)
        }
    }, [questions, currentQuestionIndex, userAnswers, setQuizFinished, setTotalPoints, currentQuestionId])

    function getQuestionComponent(props: IGetQuestionComponentProps): ReactElement {
        const { type, data, key = currentQuestionIndex, correctAnswers, userAnswer } = props

        switch (type) {
            case questionType.multipleChoice: {
                return <MultiChoice key={key} data={data} correctAnswer={correctAnswers} userAnswer={userAnswer?.answerIds}></MultiChoice>
            }
            case questionType.text: {
                return <TextChoice key={key} correctAnswer={correctAnswers} userAnswer={userAnswer?.textAnswer} ></TextChoice>
            }
            case questionType.singleChoice:
            default: {
                return <SingleChoice key={key} data={data} correctAnswers={correctAnswers} userAnswer={userAnswer?.answerId}></SingleChoice>
            }
        }
    }

    return (
        <QuizContext.Provider
            value={{
                setCurrentQuestionIndex,
                setquestions,
                setUserAnswers,
                setChoice,
                prevAnswer,
                currentQuestion,
                handleNextButton,
                currentQuestionIndex,
                questions,
                getQuestionComponent,
                disabled,
            }}>
            <section className=''>
                <div className={`${!disabled && 'mt-[200px]'} `}>
                    <h1 className='font-bold text-2xl pb-1'>{quizData.quizTitle}  </h1>
                    {(afterFinish && quizFinished) ? <QuizEnd setActiveTabOnFinish={setActiveTabOnFinish} restartQuiz={restartQuiz} /> : children}
                </div>
            </section>
        </QuizContext.Provider>
    )
};

const Quiz = Object.assign(QuizComponent, {
    ButtonNext: QuizButtonNext,
    ButtonPrev: QuizButtonPrev,
    Question: QuizQuestion,
    QuestionTitle: QuizQuestionTitle,
    QuestionProgress: QuizQuestionProgress,
    QuestionsList: QuizList,
    Result: QuizRezult
})

export default Quiz;