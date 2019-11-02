import React from "react";
import "./App.css";

import Status from "./components/Status";
import Question from "./components/Question";
import Popup from "./components/Popup";
import Loading from "./components/Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [
        {
          question: "Thủ đô của Việt Nam là?",
          answers: ["Hà Nội", "Hải Phòng", "Thành phố Hồ Chí Minh", "Đà Nẵng"],
          answerTrue: "Hà Nội"
        },
        {
          question: "Việt Nam nằm trong khu vực nào của châu Á?",
          answers: ["Đông Á", "Đông Nam Á", "Nam Á", "Tây Á"],
          answerTrue: "Đông Nam Á"
        },
        {
          question: "Quốc hoa của Việt Nam là gì",
          answers: ["Hoa Hồng", "Hoa Tulip", "Hoa Sen", "Hoa Hướng Dương"],
          answerTrue: "Hoa Sen"
        },
        {
          question: "Nước ta có bao nhiêu dân tộc đang sinh sống?",
          answers: ["56", "52", "54", "57"],
          answerTrue: "54"
        },
        {
          question: "Tỉnh nào có nhiều thành phố nhất Việt Nam?",
          answers: [
            "Hà Nội",
            "Hải Phòng",
            "Thành phố Hồ Chí Minh",
            "Quảng Ninh"
          ],
          answerTrue: "Quảng Ninh"
        },
        {
          question: "Tòa nhà nào cao nhất Việt Nam??",
          answers: [
            "Keangnam Landmark",
            "Lotte",
            "Landmark 81",
            "Tháp Bitexco"
          ],
          answerTrue: "Landmark 81"
        },
        {
          question: "Ngọn núi nào cao nhất Việt Nam?",
          answers: [
            "Phan Xi Păng",
            "Tà Chì Nhù",
            "Bạch Mộc Lương Tử",
            "Putaleng"
          ],
          answerTrue: "Phan Xi Păng"
        },
        {
          question: "Cực Bắc nước ta nằm ở tỉnh nào?",
          answers: ["Quảng Ninh", "Hà Giang", "Khánh Hòa", "Đà Nẵng"],
          answerTrue: "Hà Giang"
        },
        {
          question: "Hang động tự nhiên lớn nhất thế giới là?",
          answers: [
            "Hang Thiên Đường",
            "Động Phong Nha",
            "Hang Sơn Đoòng",
            "Bích Động"
          ],
          answerTrue: "Hang Sơn Đoòng"
        },
        {
          question: "Thánh địa Mỹ Sơn nằm ở tỉnh nào sau đây?",
          answers: ["Ninh Thuận", "Bình Thuận", "Quảng Nam", "Quảng Bình"],
          answerTrue: "Ninh Thuận"
        }
      ],
      currentQuestion: 0,
      score: 0,
      time: 60,
      userSelectClass: ["Answer", "Answer", "Answer", "Answer"],
      isSelectAnswer: false,
      isPopup: true,
      isStart: false,
      isLoading: false,
      interval: null
    };
  }
  //Đếm ngược thời gian
  countdownTime = () => {
    let { quizzes, currentQuestion, time } = this.state;
    if (currentQuestion < quizzes.length - 1) {
      //Đếm ngược thời gian 60s
      let interval = setInterval(() => {
        time--;
        this.setState({
          time: time
        });
        if (time === 0) {
          clearInterval(this.state.interval)
          this.setState({
            isPopup: true
          });
        }
      }, 1000);
      this.setState({
        interval: interval
      });
    }
  };

  //Bắt đầu bài Quiz
  startQuiz = () => {
    this.setState({
      isPopup: false
    });
    this.countdownTime();
  };

  //Kết thúc bài Quiz
  endQuiz = () => {
    clearInterval(this.state.interval);
    this.setState({
      isPopup: true
    });
  };

  //Chọn câu Trả Lời
  selectQuestion = (index, answer, answerTrue) => {
    if (!this.state.isSelectAnswer) {
      // Highlight đáp án người dùng chọn
      // TODO: Hiển thị đáp án đúng sai và tính điểm
      let { score, userSelectClass } = this.state;
      const newUserSelectClass = userSelectClass.map((selectClass, i) => {
        if (i === index) {
          if (answer === answerTrue) {
            selectClass = "Answer true";
            score++;
          } else {
            selectClass = "Answer false";
          }
        }
        return selectClass;
      });

      this.setState({
        score: score,
        userSelectClass: newUserSelectClass,
        isSelectAnswer: true
      });
    }
  };

  // Chuyển câu hỏi kế tiếp
  nextQuestion = () => {
    // Nếu chưa phải câu hỏi cuối cùng thì mới chuyển câu hỏi kế tiếp
    if (this.state.currentQuestion < this.state.quizzes.length - 1) {
      this.setState({
        userSelectClass: ["Answer", "Answer", "Answer", "Answer"],
        currentQuestion: this.state.currentQuestion + 1,
        isSelectAnswer: false
      });
    }
  };

  //Xử lý khi hết câu hỏi và restart lại quiz
  popupHandle = () => {
    let { isStart, interval } = this.state;
    //Nếu chưa bắt đầu thì cho bắt đầu còn không thì reload lại app Quiz
    if (isStart === false) {
      this.setState({
        isStart: true
      });
      this.startQuiz();
    } else {
      this.setState({
        isLoading: true //Cho Loading và sau 2s thì reload lại trang
      });
      setTimeout(() => {
        clearInterval(interval);
        this.reset();
      }, 2000);
    }
  };

  reset = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      time: 60,
      userSelectClass: ["Answer", "Answer", "Answer", "Answer"],
      isSelectAnswer: false,
      isPopup: true,
      isStart: false,
      isLoading: false,
      interval: null
    });
  };
  render() {
    const {
      quizzes,
      currentQuestion,
      score,
      time,
      userSelectClass,
      isSelectAnswer,
      isPopup,
      isStart,
      isLoading
    } = this.state;

    return (
      <div className="App container-fluid">
        {isPopup ? (
          <Popup
            total={quizzes.length}
            score={score}
            time={60 - time}
            isPopup={isPopup}
            isStart={isStart}
            startQuiz={this.startQuiz}
            onPopupHandle={this.popupHandle}
          />
        ) : (
          ""
        )}

        <div className="Box">
          <Status
            totalQuestion={quizzes.length}
            currentQuestion={currentQuestion}
            time={time}
          />

          <Question
            quizzes={quizzes}
            currentQuestion={currentQuestion}
            userSelectClass={userSelectClass}
            isSelectAnswer={isSelectAnswer}
            onSelectQuestion={this.selectQuestion}
            onNextQuestion={this.nextQuestion}
            onEndQuiz={this.endQuiz}
          />
        </div>
        {isLoading ? <Loading /> : ""}
      </div>
    );
  }
}

export default App;
