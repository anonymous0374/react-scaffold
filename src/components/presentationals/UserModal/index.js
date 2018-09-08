import React, { Component } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import './style.less';

export default class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      dialog: null,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      user: {
        id: 1,
        name: 'jack sparrow',
        title: 'captain',
      },
    }), 2000);

    this.state.dialog = document.querySelector('dialog');
    dialogPolyfill.registerDialog(this.state.dialog);
  }

  openModal = () => {
    this.state.dialog.showModal();
  }

  closeModal = () => {
    this.state.dialog.close();
  }

  render() {
    const { state: { user: { name, title } }, open } = this;
    return (
      <dialog open={open}>
        <form method="dialog">
          <div className="dialog-title">
          Modify User
          </div>
          <div className="dialog-content">
            <div className="form">
              <div className="label">Name:</div>
              <div className="field">{name}</div>
              <div className="label">Title:</div>
              <div className="field">{title}</div>
            </div>
          </div>
          <div className="dialog-footer">
            <button type="button" className="primary" onClick={this.closeModal}>OK</button>
          </div>
        </form>
      </dialog>
    );
  }
}
