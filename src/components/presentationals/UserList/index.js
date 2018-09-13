import React, { Component } from 'react';
import UserModal from 'presentationals/UserModal';

const Modal = React.forwardRef((props, ref) => <UserModal store={props} ref={ref} />);

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRef: React.createRef(),
      list: [],
      currentUser: {},
    };
  }

  componentDidMount() {
    const users = new Promise((resolve, reject) => {
      setTimeout(resolve([{ name: 'j-sparrow', id: 1, title: 'captain' },
        { name: 'j-sparrow', id: 2, title: 'captain' }]), 1000);

      setTimeout(reject(new Error('no users found')), 1000);
    });

    users.then((res) => {
      this.setState({ list: res });
    }).catch((err) => {
      console.error(err);
    });
  }

  editUser = (user) => {
    const { state: { modalRef } } = this;
    console.log('user: ', user);
    this.setState({ currentUser: { ...user } }, () => {
      modalRef.current.openModal();
    });
  }

  textChangeHandler = (fieldName, fieldValue, userId) => {
    const updatedUserIndex = this.state.list.findIndex(item => item.id === userId);
    const user = { ...this.state.list[updatedUserIndex] };

    let updatedUser = {};
    if (user) {
      updatedUser = { ...user, [fieldName]: fieldValue };
    }

    const users = [...this.state.list];
    users.splice(updatedUserIndex, 1, updatedUser);
    this.setState({ list: users });
  }

  render() {
    const { state: { list, currentUser } } = this;

    return (
      <div>
        <h2>The Users List</h2>
        {
          list.map(item => (
            <div key={item.id} className="row">
              <label htmlFor={`user_${item.id}`}>Name:</label>
              <input
                type="text"
                id={`user_${item.id}`}
                value={item.name}
                onChange={e => this.textChangeHandler('name', e.target.value, item.id)}
              />
              <a onClick={() => this.editUser(item)}>Edit</a>
            </div>
          ))
        }
        <button type="button" className="primary" onClick={this.editUser}>Edit User</button>
        <Modal ref={this.state.modalRef} user={currentUser} />
      </div>
    );
  }
}
