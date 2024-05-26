import '@/styles/style.scss'
import Quiz from './components/Quiz'
import { TabPane, Tabs } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { tabType } from './Constants/enums';
import { defaultQuiz } from './Constants/constants';
import { IAnswered, IAnsweredValues } from './Types/QuizTypes';

function App() {
  const [activeTab, setActiveTab] = useState(tabType.quiz);
  const [quiz, setQuiz] = useState(defaultQuiz);
  const [userAnswers, setUserAnswers] = useState<(IAnsweredValues & IAnswered)[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [totalPoints, setTotalPoints] = useState([0, 0, 0]);
  const tabList = [
    // {
    //   tab: 'Edit Quiz',
    //   itemKey: tabType.edit,
    //   component: (
    //     <Quiz quizData={quiz} setUserAnswers={setUserAnswers} userAnswers={userAnswers}>
    //       <Quiz.QuestionTitle />
    //       <Quiz.QuestionProgress />
    //       <Quiz.Question>
    //         <div className='flex justify-between items-center pt-5'>
    //           <Quiz.ButtonPrev />
    //           <Quiz.ButtonNext />
    //         </div>
    //       </Quiz.Question>
    //     </Quiz>
    //   )
    // },
    {
      tab: 'Take Quiz',
      itemKey: tabType.quiz,
      component: (
        <Quiz
          setActiveTabOnFinish={setActiveTab}
          quizData={quiz}
          setUserAnswers={setUserAnswers}
          userAnswers={userAnswers}
          setQuizFinished={setQuizFinished}
          quizFinished={quizFinished}
          setTotalPoints={setTotalPoints}
        >
          <Quiz.QuestionTitle />
          <Quiz.QuestionProgress />
          <Quiz.Question>
            <div className='flex justify-between items-center pt-5'>
              <Quiz.ButtonPrev />
              <Quiz.ButtonNext />
            </div>
          </Quiz.Question>
        </Quiz>
      )
    },
    {
      tab: 'Show result',
      itemKey: tabType.result,
      disabled: !quizFinished,
      component: (
        <Quiz disabled={true} quizData={quiz} afterFinish={false} >
          <Quiz.Result totalPoints={totalPoints} />
          <Quiz.QuestionsList userAnswers={userAnswers} />
        </Quiz>
      )
    },
  ];


  return (
    <main className="h-full">
      <div className="quiz__container">
        <Tabs
          activeKey={activeTab}
          tabPaneMotion={false}
          onTabClick={(val) => setActiveTab(val as tabType)}
        >
          {tabList.map(tabcontent =>
            <TabPane tab={tabcontent.tab} disabled={tabcontent.disabled || false} itemKey={tabcontent.itemKey} key={tabcontent.itemKey}>
              {tabcontent.component}
            </TabPane>)}

        </Tabs>

      </div>
    </main>
  )
}

export default App
