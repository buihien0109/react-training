import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }
 

  render() {
    const { quizzes, currentQuestion, numberQuestionRight } = this.props;
    const total = quizzes.length
    const quiz =
      currentQuestion < total
        ? quizzes[currentQuestion]
        : quizzes[total - 1];

    return (
      <main>
        <div className="Body">
          <div className="Question">{quiz.question}</div>

          <div className="PossibleAnwsers">
            {quiz.answers.map((answer, index) => (
              <div
                className="Anwser"
                key={index}
                onClick={() => {
                  this.props.onSelectQuestion(answer, quiz.correct);
                }}
              >
                <div className="AnwserIndex">{index + 1}</div>
                <div className="AnwserContent">{answer}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="Footer">
          <button
            className="Button ButtonSmall btn btn-secondary"
            onClick={this.props.onNextQuestion}
          >
            {currentQuestion === total-1 ? "Kết thúc" : "Câu tiếp theo"}
          </button>
        </div>
      </main>
    );
  }
}

export default Question;
