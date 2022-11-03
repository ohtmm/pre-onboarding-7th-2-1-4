import HeaderBar from "@/components/HeaderBar";
import { carsAtom } from "@/lib/cars-atom";
import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import DetailList from "./DetailList";

export default function CarDetailPage() {
  const { id } = useParams();
  const [cars] = useRecoilState(carsAtom);
  const selectedCar = cars[id - 1];
  const { amount, additionalProducts, insurance, attribute } = selectedCar;
  const { imageUrl, brand, name } = selectedCar.attribute;
  return (
    <DetailPage>
      <HeaderBar text="차량상세" />
      <img src={imageUrl} />
      <h3>{brand}</h3>
      <h2>{name}</h2>
      <p>월 {amount}원</p>
      {attribute && <DetailList text="차량정보" />}
      {insurance.length ? <DetailList text="보험" /> : null}
      {additionalProducts.length ? <DetailList text="추가상품" /> : null}
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
