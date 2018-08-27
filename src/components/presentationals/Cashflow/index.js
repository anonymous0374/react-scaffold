import React from 'react';
import {
  Table, Row, Calendar, DatePicker, Form,
} from 'antd';

export default function Cashflow(props) {
  const { cashflows } = props;
  const columns = [
    {
      title: 'Date Time',
      dataIndex: 'dateTime',
      rowKey: 'dateTime',
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
