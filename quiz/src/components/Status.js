import React from "react";

class Status extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentQuestion, totalQuestion, time} = this.props
    const progress = (time / 30) * 100;
    const progressCurrentQuestion = Math.floor((progress * 350) / 100)

    return (
      <div className="Header">
        <div className="LeftSide">
          <div className="ProgressBar" style={{ width: progressCurrentQuestion }}>
            <span className="Percent">{progress}%</span>
          </div>
        </div>
        <div className="RightSide">
          <div className="CurrentQuestion">{currentQuestion + 1}/{totalQuestion}</div>
        </div>
      </div>
    );
  }
  

  
}

export default Status;
