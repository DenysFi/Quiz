import { IAnswered, IAnsweredValues, IGetQuestionComponentProps, IQuestion } from "@/Types/QuizTypes";
import { ReactElement, createContext, useContext } from "react";

interface IQuizContext {
    setCurrentQuestionIndex: (index: number | ((prevIndex: number) => number)) => void
    setquestions: (value: IQuestion[]) => void,
    setUserAnswers: (value: (IAnsweredValues & IAnswered)[]) => void,
    setChoice: (value: IAnsweredValues | null) => void,
    prevAnswer: IAnsweredValues & IAnswered | undefined,
    currentQuestion: IQuestion,
    currentQuestionIndex: number,
    handleNextButton: () => void
    questions: IQuestion[],
    getQuestionComponent(
        props: IGetQuestionComponentProps
    ): ReactElement

    disabled: boolean
}

export const QuizContext = createContext<IQuizContext>(null!)

export const useQuizContext = () => {
    const props = useContext(QuizContext);

    if (!props) {
        throw new Error('No Quiz context provider!')
    }

    return props;
};

