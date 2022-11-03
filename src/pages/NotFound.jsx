import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundContainer>
      페이지를 찾을 수 없습니다.
      <Link to={"/"}>Home으로 돌아가기</Link>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 800px;
  margin: 0 auto;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  background-color: #fff;
`;
