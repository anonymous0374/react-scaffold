import { createStore } from "react";
import React from "react";
import { Table, Icon, Divider } from "antd";
import "antd/dist/antd.css";

export default class AssetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const list = [
      {
        key: 0,
        name: "real estate 1",
        location: "Jiaxing",
        description: "Fu Sheng Min Di",
        price: 1270000
      },
      {
        key: 1,
        name: "real estate 2",
        location: "Ezhou",
        description: "Zhulin Square",
        price: 550000
      },
      {
        key: 2,
        name: "bonds",
        location: "Stocks",
        description: "bonds",
        price: 35000
      }
    ];
    const columns = [
      { title: "Asset Name", dataIndex: "name", key: "name" },
      { title: "Location", dataIndex: "location", key: "location" },
      { title: "Worth", dataIndex: "worth", key: "worth" },
      { title: "Description", dataIndex: "description", key: "description" }
    ];

    return <Table dataSource={list} columns={columns} />;
  }
}
