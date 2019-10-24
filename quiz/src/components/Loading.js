import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="modal-loading">
        <div className="caption">loading...</div>
        <div className="animation" />
      </div>
    );
  }
}

export default Loading;
