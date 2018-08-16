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
    const { assets } = this.props;
    const columns = [
      { title: "Asset Name", dataIndex: "name", key: "name" },
      { title: "Location", dataIndex: "location", key: "location" },
      { title: "Worth", dataIndex: "price", key: "worth" },
      { title: "Description", dataIndex: "description", key: "description" }
    ];

    return <Table dataSource={assets} columns={columns} />;
  }
}
