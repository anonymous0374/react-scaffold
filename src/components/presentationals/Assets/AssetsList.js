import React from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';
import Header from 'containers/Header';

export default function AssetsList(props) {
  const { assets: assetsObj } = props;
  const assets = Object.keys(assetsObj).map(index => assets[index]);
  const columns = [
    { title: 'Asset Name', dataIndex: 'name', key: 'name' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Worth', dataIndex: 'price', key: 'worth' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
  ];
  console.info(assets);

  return (
    <div>
      <Header />
      <Table dataSource={assets} columns={columns} />
    </div>
  );
}
