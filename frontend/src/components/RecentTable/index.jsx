import React from "react";
import { Table } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

export default function RecentTable({ data, dataTableColumns }) {
  const columns = dataTableColumns.map(column => ({
    ...column,
    ellipsis: true,
    width: 250, // Set a fixed width for each column (adjust the value as needed)
  }));

  return (
    <Table
      columns={columns}
      rowKey={(item) => item._id}
      dataSource={data}
      pagination={false}
      expandable={{
        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: record => record.description !== undefined,
      }}
    />
  );
}
