import React from "react";

class Popup extends React.Component {

  render() {
    const { total, score, isStart, time } = this.props;
    let title, text, buttonText
    if(isStart) {
        title = "Chúc mừng bạn đã hoàn thành bài kiểm tra"
        text = "Bạn đạt " + score + "/" + total +" câu hỏi trong thời gian " + time + "s"
        buttonText = "CHƠI LẠI"
    } else {
        title = "Bạn hiểu đất nước Việt Nam của mình đến đâu?"
        text = "Bạn có phải là một người yêu nước, kiến thức của bạn về nước ta rộng lớn đến đâu? Tham gia làm bài test IQ để biết bạn hiểu đất nước Việt Nam của mình đến đâu? Chúc các bạn làm bài vui vẻ! "
        buttonText = "BẮT ĐẦU NGAY"
    }
    return (
      <div className="popup-container">
        <div className="container">
          <div className="col-md-8 mr-auto ml-auto">
            <div className="popup">
              <h1>{title}</h1>
              <p>{text}</p>
              <button className="fancy-btn" onClick={this.props.onPopupHandle}>
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
