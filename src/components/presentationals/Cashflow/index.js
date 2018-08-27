import React from 'react';
import {
  Table, Row, Calendar, DatePicker, Form,
} from 'antd';
import { capitalizeFirstLetter } from 'utilities/string';
import moment from 'moment';

export default function Cashflow(props) {
  const { cashflows } = props;
  const columns = [
    {
      title: 'Date Time',
      dataIndex: 'dateTime',
      rowKey: 'dateTime',
      render: text => moment(text).format('MMM Do YYYY, hh:mm:ss a'),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      rowKey: 'amount',
    },
    {
      title: 'Flow Direction',
      dataIndex: 'direction',
      rowKey: 'direction',
      render: text => `Cash ${capitalizeFirstLetter(text)}`,
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      rowKey: 'paymentMethod',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      rowKey: 'dueDate',
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      rowKey: 'remark',
    },
  ];

  return (
    <div>
      <Table
        dataSource={cashflows.map((item, index) => {
          item.key = index;
          return item;
        })}
        columns={columns}
      />
    </div>
  );
}
