import React from "react";
import "../App.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "start",
      title: "Welcome to Quizz",
      text: "Bài kiểm tra trắc nghiệm",
      buttonText: "Bắt đầu"
    };
  }
  render() {
    let { numberQuestionRight, quizzes, currentQuestion } = this.props;
    let { title, text, buttonText } = this.state;
    let total = quizzes.length;
    if (currentQuestion === total - 1) {
      this.setState({
        time: "end",
        title: "Welcome to Quizz",
        text:
          "Bạn đã trả lời chính xác " +
          numberQuestionRight +
          "/" +
          total +
          " câu hỏi",
        buttonText: "Chơi lại"
      });
    }
    return (
      <div className="popup-container">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="popup">
              <h1>{title}</h1>
              <p>{text}</p>
              <button className="fancy-btn" onClick={this.props.popupHandle}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
