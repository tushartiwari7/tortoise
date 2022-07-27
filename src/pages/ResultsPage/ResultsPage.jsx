import { Result, Button, Typography } from "antd";
import { RESET_USER_STATS } from "assets/utils";
import { useUser } from "global";
import { Link, useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  const { user, dispatch } = useUser();
  const navigate = useNavigate();

  const playAgain = () => {
    dispatch({ type: RESET_USER_STATS });
    navigate("/play");
  };

  return (
    <Result
      status={user.status === "Failed" ? "error" : "success"}
      title={user.title}
      subTitle={<Typography.Title level={5}>{user.subTitle}</Typography.Title>}
      extra={[
        <Link to="/leaderboard" key="leaderboad">
          <Button type="primary">View Leaderboad</Button>
        </Link>,
        <Button key="play" onClick={playAgain}>
          Play Again
        </Button>,
      ]}
    />
  );
};

export default ResultsPage;
