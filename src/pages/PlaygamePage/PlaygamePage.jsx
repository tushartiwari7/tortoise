import "./PlaygamePage.css";
import { Layout, Card, Typography, Input, Button, Row, Col } from "antd";

const PlaygamePage = () => {
  return (
    <Layout className="full-width">
      <Layout.Header className="game-header">
        <Row>
          <Col className="game-heading">
            <Typography.Title type="secondary" level={2}>
              Type the Text
            </Typography.Title>
          </Col>
          <Col className="timer-container">
            <Typography.Title level={2}>10:00</Typography.Title>
          </Col>
        </Row>
      </Layout.Header>

      <Layout.Content>
        <Card className="alphabet-display-card">
          <Typography.Title level={1}>A</Typography.Title>
        </Card>
      </Layout.Content>
      <Layout.Footer>
        <Row>
          <Col className="input-box">
            <Input placeholder="Type Alphabet"></Input>
          </Col>
          <Col>
            <Button>Reset</Button>
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  );
};

export default PlaygamePage;
