import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Protected = (props) => {
  const navigate = useNavigate();
  const { Cmp } = props;
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
