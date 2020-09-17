import React from "react";

const Modal = (props) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h3>Happily Woke</h3>
          <span className="close-modal-btn" >onClick={props.close}
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>What kind of news would you like to see today?</p>
          <label class="checkbox">
            <input type="checkbox" />
            Positive News
          </label>
          <label class="checkbox">
            <input type="checkbox" />
            Positive and Neutral News
          </label>
          <label class="checkbox">
            <input type="checkbox" />
            Everything!
          </label>
        </div>
        <div className="modal-footer">
          <button className="btn-continue">Load Articles!</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
