import { Typography, Input, Row, Col, Button, message, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./LandingPage.css";
import poster from "assets/poster.svg";
import { useState } from "react";
import { useUser } from "global";
import { UPDATE_NAME } from "assets/utils";
import { GameRules } from "components";
const LandingPage = () => {
  const [name, setName] = useState("");
  const [gameRulesVisible, setGameRulesVisible] = useState(false);
  const updateName = (event) => setName(event.target.value);
  const { dispatch } = useUser();
  const storeName = () => {
    if (!name) {
      return message.error("Name cannot be empty");
    }
    dispatch({ type: UPDATE_NAME, payload: name });
    setGameRulesVisible(true);
  };

  return (
    <>
      <Row className="full-width reverse center">
        <Col span={12} className="landing-page__content">
          <Typography.Title className="landing-page__title" level={2}>
            Let's see how fast and Precise you are
          </Typography.Title>
          <div className="flex landing-page__actions">
            <Input
              placeholder="Enter your name"
              value={name}
              required
              size="large"
              onChange={updateName}
              onPressEnter={storeName}
              prefix={<UserOutlined />}
            />
            <Button
              type="primary"
              shape="round"
              onClick={storeName}
              size="large"
            >
              Play Now
            </Button>
          </div>
        </Col>
        <Col span={12} className="landing-page__poster">
          <Image
            preview={false}
            src={poster}
            width="70%"
            alt="man wants to play the game"
          />
        </Col>
      </Row>
      <GameRules
        isVisible={gameRulesVisible}
        setGameRulesVisible={setGameRulesVisible}
      />
    </>
  );
};

export default LandingPage;
