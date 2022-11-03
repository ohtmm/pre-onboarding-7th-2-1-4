import Category from "@/components/Category";
import React, { useState } from "react";
import HeaderBar from "@/components/HeaderBar";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import axios from "axios";
import CarsList from "./CarsList";
import { segmentAtom } from "@/lib/cars-atom";
import { useRecoilValue } from "recoil";

export default function CarsPage() {
  const carsSegment = useRecoilValue(segmentAtom);
  const {
    isLoading,
    data: cars,
    error
  } = useQuery(
    ["cars", carsSegment],
    async () => {
      const res = await axios.get(
        `https://preonboarding.platdev.net/api/cars?${
          carsSegment ? `segment=${carsSegment}` : ""
        }`
      );
      return res.data.payload;
    },
    {
      staleTime: 1000 * 60 * 5
    }
  );
  return (
    <CarsContainer>
      <HeaderBar text="전체차량" />
      <Category />
      {error ? (
        <Loader>에러 {error.message} 담당자에게 문의하세요</Loader>
      ) : !isLoading ? (
        <CarsList cars={cars} />
      ) : (
        <Loader>불러오는 중</Loader>
      )}
    </CarsContainer>
  );
}

const CarsContainer = styled.div`
  width: 390px;
  height: 1000px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;
