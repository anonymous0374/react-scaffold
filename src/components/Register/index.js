import React, { Component } from "react";
import { Form, Button, Input, Row, Col, Card, Icon, Tooltip } from "antd";
import "./style.less";

const FormItem = Form.Item;

class RegisterForm extends Component {
  submitHandler = e => {
    e.preventDefault();
    const {
      props: {
        form: { validateFieldsAndScroll },
        register
      }
    } = this;

    console.log("register component this: ", this);

    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { userName, password, email, city, profession, gender } = values;
        const basicInfo = {
          userName,
          password,
          email
        };
        const extraInfo = {
          city,
          gender,
          profession
        };
        register({ basicInfo, extraInfo });
      }
    });
  };

  cancelHandler = () => {
    const {
      props: { form }
    } = this;
    form.resetFields();
  };

  render() {
    const {
      props: {
        form: { getFieldDecorator }
      }
    } = this;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <Form onSubmit={this.submitHandler} className="form">
        <div className="form-title">
          <h1>Congrates to Become Our VIP</h1>
        </div>
        <Card title="Your Basic Information Here:">
          <FormItem label="User Name" layout="horizontal" {...formItemLayout}>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "Please input a User Name" }]
            })(
              <Input
                placeholder="User Name"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0.0.0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <FormItem label="Email" {...formItemLayout}>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "Sorry, the email address is invalid"
                }
              ]
            })(
              <Input
                placeholder="Your Email Address"
                title="We'll Send you Valuable Emails"
              />
            )}
          </FormItem>
          <FormItem label="Password" {...formItemLayout}>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input a Password" }]
            })(
              <Input
                placeholder="Password"
                type="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
          <FormItem label="Confirm Password" {...formItemLayout}>
            {getFieldDecorator("confirm", {
              rules: [
                { required: true, message: "Please confirm your Password" }
              ]
            })(
              <Input
                placeholder="Please type the Password again"
                type="password"
                title="Two passwords must be identical"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </FormItem>
        </Card>
        <Card title="Your are Welcome to Provide some Other Infomation to US:">
          <FormItem label="Residential City" {...formItemLayout}>
            {getFieldDecorator("city")(
              <Input
                placeholder="Your Residential City"
                title="We'll Keep it Private"
              />
            )}
          </FormItem>
          <FormItem label="Profession" {...formItemLayout}>
            {getFieldDecorator("profession")(
              <Input
                placeholder="Your Profession"
                title="We'll Keep it Private"
              />
            )}
          </FormItem>
          <FormItem label="Gender" {...formItemLayout}>
            {getFieldDecorator("gender")(
              <Input placeholder="Your Gender" title="We'll Keep it Private" />
            )}
          </FormItem>
        </Card>
        <div className="footer">
          <Row>
            <Col span={10}>
              <Button
                type="primary"
                style={{ float: "right", marginRight: "10px" }}
                onClick={this.submitHandler}
              >
                Submit
              </Button>
            </Col>
            <Col span={14}>
              <Button
                style={{ float: "left", marginLeft: "10px" }}
                onClick={this.cancelHandler}
              >
                Let me Think for a Moment
              </Button>
            </Col>
          </Row>
        </div>
      </Form>
    );
  }
}

export default Form.create()(RegisterForm);
