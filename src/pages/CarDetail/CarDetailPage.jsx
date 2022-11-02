import HeaderBar from "@/components/HeaderBar";
import React from "react";
import styled from "styled-components";
import DetailList from "./DetailList";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

export default function CarDetailPage() {
  return (
    <DetailPage>
      <HeaderBar text="차량상세" />
      <img />
      <h3>현대</h3>
      <h2>아반떼 CN7</h2>
      <p>월 600,000원</p>
      <DetailList text="차량정보" />
      <DetailList text="보험" />
      <DetailList text="추가상품" />
    </DetailPage>
  );
}

const DetailPage = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: #fff;

  img {
    display: block;
    width: 100%;
    height: 205px;
    background-color: #d9d9d9;
  }
  h3 {
    margin: 20px 0 0 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  h2 {
    margin: 0 0 34px 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  p {
    margin: 0 22px 14px 0;
    text-align: right;
  }
`;
