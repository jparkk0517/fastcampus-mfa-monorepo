import React, { Component } from "react";
import Button from "./Button";

export default class Modal extends Component {
  render() {
    const { open, title, onClose, onConfirm, children } = this.props;
    if (!open) return <></>;
    return (
      <div className="modal-container">
        <div className="modal-dimmed" onClick={() => onClose()} />
        <div className="modal-content">
          <div className="modal-close" onClick={() => onClose()}>
            X
          </div>
          <div className="modal-title">{title}</div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <Button onClick={() => onConfirm && onConfirm()}>확인</Button>
            <Button buttonType="cancel" onClick={() => onClose && onClose()}>
              취소
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
