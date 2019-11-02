import React from "react";

class Question extends React.Component {
  render() {
    const LABEL_ANSWER = ["A", "B", "C", "D"];

    const {
      quizzes,
      currentQuestion,
      userSelectClass,
      isSelectAnswer,
      onSelectQuestion,
      onNextQuestion,
      onEndQuiz
    } = this.props;

    const quiz = quizzes[currentQuestion];

    const btnNextQuestion = (
      <button
        className="Button ButtonSmall btn btn-secondary"
        onClick={onNextQuestion}
      >
        CÂU TIẾP THEO
      </button>
    );

    const btnEndQuiz = (
      <button
        className="Button ButtonSmall btn btn-secondary"
        onClick={onEndQuiz}
      >
        KẾT THÚC
      </button>
    );

    return (
      <main>
        <div className="Body">
          <div className="Question">
            {currentQuestion + 1}. {quiz.question}
          </div>

          <div className="PossibleAnswers">
            {quiz.answers.map((answer, index) => (
              <div
                className={userSelectClass[index]}
                key={index}
                onClick={() => {
                  onSelectQuestion(index, answer, quiz.answerTrue);
                }}
              >
                <div className="AnswerIndex">{LABEL_ANSWER[index]}</div>
                <div className="AnswerContent">{answer}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="Footer">
          {currentQuestion === quizzes.length - 1
            ? btnEndQuiz
            : isSelectAnswer === true
            ? btnNextQuestion
            : ""}
        </div>
      </main>
    );
  }
}

export default Question;
