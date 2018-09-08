import React, { Component } from 'react';
import UserModal from 'presentationals/UserModal';

const Modal = React.forwardRef((props, ref) => <UserModal store={props} ref={ref} />);

export default class UserList extends Component {
  modalRef = React.createRef()

  editUser = () => {
    this.modalRef.current.openModal();
  }

  render() {
    return (
      <div>
        <span>UserList Components</span>
        <Modal ref={this.modalRef} />
        <button type="button" className="primary" onClick={this.editUser}>Edit User</button>
      </div>
    );
  }
}
