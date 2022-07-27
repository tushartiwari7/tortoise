import { useUser } from "global";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userName) return navigate("/");
  }, [user.userName, navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
