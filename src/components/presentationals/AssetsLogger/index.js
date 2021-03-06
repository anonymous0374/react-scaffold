import React, { Component } from 'react';
import {
  Modal, Form, Button, Input, DatePicker, Select, Row, Switch,
} from 'antd';
import moment from 'moment';
import './style.less';
import { capitalizeFirstLetter } from 'utilities/string';

const { Option } = Select;
const { Item: FormItem } = Form;
const PAYMENT_METHOD = ['cash', "yu'er bao", 'ant credit pay', 'credit card'];

class AssetsLogger extends Component {
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
      values.direction ? (values.direction = 'out') : (values.direction = 'in');
      log(values);
      toggleModal(); // need to run this method asynchronously
      /*
      log(values).then(
        (res) => {
          toggleModal(); // need to run this method asynchronously
        },
        (err) => {
          throw new Error(err);
        },
      );
      */
    });
  };

  cancelHandler = () => {
    const {
      props: {
        toggleModal,
        form: { resetFields },
      },
    } = this;
    resetFields();
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
        title="Log your Cashflow"
        visible={visible}
        onOk={this.confirmHandler}
        onCancel={this.cancelHandler}
        footer={[
          <Button key="back" onClick={this.cancelHandler}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={this.confirmHandler}>
            Submit
          </Button>,
        ]}
      >
        <Form className="form" onSubmit={log}>
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
                      {capitalizeFirstLetter(item)}
                    </Option>
                  ))}
                </Select>,
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Direction" {...formItemLayout}>
              {getFieldDecorator('direction', {
                initialValue: true,
                rules: [{ required: true, message: 'Please input the payment method.' }],
              })(<Switch checkedChildren="Out" unCheckedChildren="In" />)}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Payment Due Date" {...formItemLayout}>
              {getFieldDecorator('dueDate', { initialValue: new moment() })(<DatePicker />)}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Remarks" {...formItemLayout}>
              {getFieldDecorator('remark', {})(<Input />)}
            </FormItem>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(AssetsLogger);
