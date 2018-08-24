import React from 'react';
import {
  Button, Input, Form, Checkbox, Row, Col, Icon,
} from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.less';

const { Item: FormItem } = Form;

class Login extends React.Component {
  state = { showPassword: false }; // pure in-component state, no business logic involved

  submitHandler = (event) => {
    event.preventDefault();
    const {
      props: {
        login,
        form: { validateFields },
      },
    } = this;
    validateFields((err, values) => {
      if (err) {
        return;
      }
      login(values);
    });
  };

  checkboxHandler = (fieldName, value) => {
    this.setState(() => ({ [fieldName]: value }));
  };

  cancelHandler = () => {
    const {
      props: { form: resetFields },
    } = this;
    resetFields();
  };

  render() {
    const {
      props: {
        auth: { msg },
        form: { getFieldDecorator },
      },
    } = this;

    const { showPassword } = this.state;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 },
    };

    return (
      <Form onSubmit={this.submitHandler} className="login-form">
        <Row>
          <h1 className="form-title">
            Welcome to Assets Management System
          </h1>
        </Row>
        <Row>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [
                { required: true, message: 'Please entery your password.' },
              ],
            })(<Input type="text" placeholder="user name" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
          </FormItem>
        </Row>
        <Row>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please entery your password.' },
              ],
            })(
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />,
            )}
          </FormItem>
        </Row>
        <Row style={{ marginBottom: '24px' }}>
          <Col span={12}>
            <Checkbox
              id="show"
              type="checkbox"
              checked={showPassword}
              onChange={event => this.checkboxHandler('showPassword', event.target.checked)}
            />
            <label htmlFor="show">Show Passowrd</label>
          </Col>
          <Col span={12}>
            <Checkbox
              id="remember"
              type="checkbox"
              style={{ marginLeft: '5px' }}
            />
            <label htmlFor="remember">Remember Me</label>
          </Col>
        </Row>
        <Row>
          {msg ? <div className="error-message" dangerouslySetInnerHTML={{__html: msg}} /> : null}
        </Row>
        <Row>
          <Col span={12}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.submitHandler}
            >
              Login
            </Button>
          </Col>
          <Col span={12}>
            <Button onClick={this.cancelHandler}>Cancel</Button>
          </Col>
        </Row>
        <Row>
          <div className="register-link">
            <Link to="/register">Don't have an Account? Click to Register</Link>
          </div>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(Login);
