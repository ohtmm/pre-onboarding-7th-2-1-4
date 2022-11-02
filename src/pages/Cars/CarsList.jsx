import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";

export default function CarsList() {
  // cars 데이터 관리
  return (
    <CarsListContainer>
      <CarItem />
      <CarItem />
      <CarItem />
    </CarsListContainer>
  );
}

const CarsListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
