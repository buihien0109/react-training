import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import Status from "./components/Status";
import Question from "./components/Question";
import Popup from "./components/Popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [
        {
          question:
            ' Sau cách mạng tháng Tám, Bác Hồ đã từng nói: "Một dân tộc dốt là một dân tộc..."',
          answers: ["Đói", "Yếu", "Thất bại", "Nhỏ bé"],
          correct: "Yếu"
        },
        {
          question: "Ngày 6 – 1 – 1946 ở Việt Nam diễn ra sự kiện nào sau đây?",
          answers: [
            "Thông qua Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa",
            "Bầu cử Hội đồng nhân dân các cấp; thành lập Ủy ban hành chính các cấp",
            "Quốc hội khóa I họp phiên đầu tiên, thành lập Chính phủ Liên hiệp kháng chiến",
            "Tổng tuyển cử bầu đại biểu Quốc hội nước Việt Nam Dân chủ Cộng hòa."
          ],
          correct:
            "Tổng tuyển cử bầu đại biểu Quốc hội nước Việt Nam Dân chủ Cộng hòa."
        },
        {
          question: "Chiến thắng lịch sử Điện Biên Phủ diễn ra vào năm nào?",
          answers: ["1945", "1954", "1975", "1972"],
          correct: "1954"
        }
      ],
      currentQuestion: 0,
      numberQuestionRight: 0,
      displayPopup: true
    };
  }

  onNextQuestion = () => {
    let {currentQuestion, quizzes} = this.state
    let total = quizzes.length
    this.setState({
      currentQuestion:
        currentQuestion < total
          ? currentQuestion + 1
          : currentQuestion,
      displayPopup:
        currentQuestion + 1 === total
          ? true
          : false
    });
  };

  popupHandle = () => {
    this.setState({
      displayPopup: false
    });
  };

  onSelectQuestion = (answer, correct) => {
    const {numberQuestionRight} = this.state
    if (answer === correct) {
      this.setState({
        currentQuestion : this.state.currentQuestion + 1,
        numberQuestionRight: numberQuestionRight + 1
      })
      toast.success("Chính xác", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });
    } else {
      toast.error("Không đúng rồi!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      });
    }
  }

  render() {
    let { displayPopup } = this.state;
    let elePopup =
      displayPopup === true ? (
        <Popup
          popupHandle={this.popupHandle}
          numberQuestionRight={this.state.numberQuestionRight}
          quizzes={this.state.quizzes}
          currentQuestion={this.state.currentQuestion}
        />
      ) : (
        ""
      );

    return (
      <div className="App container-fluid">
        {elePopup}
        <div className="Box">
          <Status
            totalQuestion={this.state.quizzes.length}
            currentQuestion={this.state.currentQuestion}
          />

          <Question
            quizzes={this.state.quizzes}
            numberQuestionRight={this.state.numberQuestionRight}
            currentQuestion={this.state.currentQuestion}
            onNextQuestion={this.onNextQuestion}
            onSelectQuestion = {this.onSelectQuestion}
          />
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default App;
