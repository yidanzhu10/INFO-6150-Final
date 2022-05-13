//from Yidan
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function BackButton() {
    var navigate = useNavigate();

    function toDash(event){
        event.preventDefault();
        navigate("/dashboard");
    }
  return (
    <div className="back">
      <Button onClick={toDash} className="backButton">Go Back To DashBoard</Button>
    </div>
  );
}

const Button = styled.button`
  color: #50a3a2;
  padding: 0.5%;
  background-color: #eeeeee;
  font-family: "montserrat", sans-serif;
  font-weight: 500;
  border: 0.5px solid #50a3a2;
  border-radius: 10px;
  margin-left: 5%;
`;


export default BackButton;