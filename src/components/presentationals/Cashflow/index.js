import React from 'react';
import {
  Table, Row, Calendar, DatePicker, Form,
} from 'antd';
import Header from 'containers/Header';

export default function Cashflow(props) {
  const { events } = props;
  const columns = [
    {
      title: 'Date Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Flow Direction',
      dataIndex: 'direction',
      key: 'direction',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
    },
  ];

  return (
    <div>
      <Header />
      <Table dataSource={events} columns={columns} />
    </div>
  );
}
