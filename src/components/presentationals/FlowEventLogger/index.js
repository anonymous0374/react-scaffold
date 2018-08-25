import React, { Component } from 'react';
import {
  Modal, Form, Button, Input, Calendar, Select, Row, Col, Card,
} from 'antd';
import './style.less';

const { Option } = Select;
const { Item: FormItem } = Form;
const PAYMENT_METHOD = ['cash', "yu'er bao", 'ant credit pay', 'credit card'];
const PAYMENT_DIRECTION = ['flow in', 'flow out'];

class FlowEventLogger extends Component {
  confirmHandler = () => {
    const {
      props: {
        form: { validateFieldsAndScroll },
        log,
        toggleModal,
      },
    } = this;

    validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      log(values);
      toggleModal(); // need to run this method asynchronously
    });
  };

  cancelHandler = () => {
    const {
      props: { toggleModal },
    } = this;
    this.form.resetFields();
    toggleModal(); // need to run this method asynchronously
  };

  render() {
    const {
      props: {
        log,
        visible,
        form: { getFieldDecorator },
      },
    } = this;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={this.confirmHandler}
        onCancel={this.cancelHandler}
        footer={[
          <Button key="back" onClick={this.cancelHandler}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.confirmHandle}>
            Submit
          </Button>,
        ]}
      >
        <Form className="form" onSubmit={log}>
          <Card title="Please Input a Cash flow" bordered={false} style={{ width: '90%' }}>
            <Row>
              <FormItem label="Amount" {...formItemLayout}>
                {getFieldDecorator('amount', {
                  rules: [{ required: true, message: 'Please input the amount' }],
                })(<Input />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Payment Method" {...formItemLayout}>
                {getFieldDecorator('paymentMethod')(
                  <Select>
                    {PAYMENT_METHOD.map(item => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>,
                )}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Direction" {...formItemLayout}>
                {getFieldDecorator('direction')(
                  <Select>
                    {PAYMENT_DIRECTION.map(item => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>,
                )}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Payment Due Date" {...formItemLayout}>
                {getFieldDecorator('dueDate', {})(<Calendar />)}
              </FormItem>
            </Row>
            <Row>
              <FormItem label="Remarks" {...formItemLayout}>
                {getFieldDecorator('remark', {})(<Input />)}
              </FormItem>
            </Row>{' '}
            */}
          </Card>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(FlowEventLogger);
