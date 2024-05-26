import { questionType } from "@/Constants/enums"

export interface IAnswer {
    id?: number,
    answerText: string,
    isCorrect?: boolean,

}
export interface IQuestion {
    qid: number
    questionText: string,
    questionType: questionType,
    maxScore: number,
    answers: IAnswer[],

}
export interface IQuiz {
    quizTitle: string,
    questions: IQuestion[]
}

export interface IAnswered {
    id: number,
    questionType: questionType
}

export interface IAnsweredValues {
    answerId?: number,
    answerIds?: number[],
    textAnswer?: string,
}

export type ICorrectAnswer = Partial<IQuestion>

export interface IGetQuestionComponentProps {
    type: questionType;
    data: IAnswer[];
    key?: number;
    correctAnswers?: ICorrectAnswer[];
    userAnswer?: IAnsweredValues & IAnswered;
}