import React from "react";
import { Table } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

export default function RecentTable({ data, dataTableColumns }) {
  const totalColumnsWidth = dataTableColumns.reduce((total, column) => total + (column.width || 200), 0);
  const availableWidth = window.innerWidth - 50; // Adjust this value as needed to leave space for other UI elements

  const columns = dataTableColumns.map(column => ({
    ...column,
    ellipsis: true,
    width: column.width ? column.width : (column.width = Math.floor(availableWidth / totalColumnsWidth * 200)), // Assuming initial width of 200px for columns without explicit width
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
