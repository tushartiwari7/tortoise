import React from "react";
import { Modal, List } from "antd";
import { useNavigate } from "react-router-dom";

const rules = [
  "Game Starts as soon as you Press OK",
  "You need to type same letter again as shown in the BOX",
  "Penalty of 0.5 sec will be increased on incorrect letter",
  "You will get maximum of 40 seconds to pass the game",
];

const GameRules = ({ isVisible, setGameRulesVisible }) => {
  const navigate = useNavigate();
  const closeGameRules = () => setGameRulesVisible(false);
  const navigateAndClose = () => {
    navigate("/play");
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isVisible}
      onCancel={closeGameRules}
      onOk={navigateAndClose}
    >
      <List
        size="large"
        bordered
        dataSource={rules}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Modal>
  );
};

export default GameRules;
