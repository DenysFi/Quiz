import { questionType } from "@/Constants/enums";
import { IAnswered, IAnsweredValues, IQuestion } from "@/Types/QuizTypes";

export function countTotalPoints(questions: IQuestion[], answers: (IAnsweredValues & IAnswered)[]) {
    const maxPoints = questions.reduce((acc, q) => {
        return acc + q.maxScore
    }, 0)

    const res = answers.reduce((acc, answ) => {
        const question = questions.find(q => q.qid === answ.id)!;

        switch (question.questionType) {
            case questionType.multipleChoice: {
                if (!answ.answerIds || answ.answerIds.length > question.answers.length) {
                    return acc;
                }
                const correctAnsw = question.answers.filter(a => a.isCorrect).length;
                const correctPerAnswPoints = question.maxScore / correctAnsw;
                let total = 0;
                answ.answerIds.forEach(a => {
                    if (question.answers[a].isCorrect) {
                        total += correctPerAnswPoints;
                        acc.numberOfCorrectAnswers += 1;
                    }
                });

                acc.score += total;
                return acc;
            }
            case questionType.text: {
                const correctAnsws = question.answers.reduce((acc: string[], el) => {
                    acc.push(el.answerText.toLowerCase());
                    return acc;
                }, []);

                if (!answ.textAnswer || !correctAnsws.includes(answ.textAnswer.toLowerCase())) {
                    return acc;
                }
                acc.score += question.maxScore;
                acc.numberOfCorrectAnswers += 1;
                return acc;
            }
            case questionType.singleChoice: {
                if (answ.answerId === undefined) {
                    return acc;
                }

                if (question.answers[answ.answerId].isCorrect) {
                    acc.score += question.maxScore;
                    acc.numberOfCorrectAnswers += 1;
                }


                return acc;
            }
            default:
                return acc;
        }
    }, { score: 0, numberOfCorrectAnswers: 0 });

    return [res.score, maxPoints, res.numberOfCorrectAnswers];
}