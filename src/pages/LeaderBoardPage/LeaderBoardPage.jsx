import React from "react";
import { Table, Tag, Typography } from "antd";
import { useUser } from "global";

const columns = [
  {
    title: "S No.",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Time Taken (in seconds)",
    dataIndex: "timeTaken",
    key: "timeTaken",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "Success" ? "green" : "volcano"}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

const LeaderBoardPage = () => {
  const { leaderboard } = useUser();
  const antdAccessibleData = leaderboard
    .map(({ id, score, userName, timeTaken, status }) => ({
      score,
      timeTaken,
      status,
      key: id,
      name: userName,
    }))
    .sort((a, b) => +b.score - +a.score);
  console.dir(antdAccessibleData);
  return (
    <>
      <Typography.Title>Leader Board</Typography.Title>
      <Table
        style={{ minWidth: "70%" }}
        columns={columns}
        dataSource={antdAccessibleData}
      />
    </>
  );
};
export default LeaderBoardPage;
