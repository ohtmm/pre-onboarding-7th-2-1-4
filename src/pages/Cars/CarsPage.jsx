import Category from "@/components/Category";
import HeaderBar from "@/components/HeaderBar";
import React from "react";
import styled from "styled-components";
import CarsList from "./CarsList";

export default function CarsPage() {
  return (
    <CarsContainer>
      <HeaderBar text="전체차량" />
      <Category />
      <CarsList />
    </CarsContainer>
  );
}

const CarsContainer = styled.div`
  width: 390px;
  height: 1000px;
  margin: 0 auto;
  background-color: #fff;
`;
