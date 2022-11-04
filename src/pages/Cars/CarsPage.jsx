import Category from "@/components/Category";
import React from "react";
import HeaderBar from "@/components/HeaderBar";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import axios from "axios";
import CarsList from "./CarsList";
import { segmentAtom } from "@/lib/cars-atom";
import { useRecoilValue } from "recoil";
import Notice from "@/components/Notice";

export default function CarsPage() {
  const carsSegment = useRecoilValue(segmentAtom);
  const {
    isLoading,
    data: cars,
    error
  } = useQuery(
    ["cars", carsSegment],
    // 1. getCarsData(carsSegment)
    async () => {
      const res = await axios.get(
        `https://preonboarding.platdev.net/api/cars?${
          carsSegment ? `segment=${carsSegment}` : ""
        }`
      );
      return res.data.payload;
    }
    // 3. getCars(carsSegment),
  );
  return (
    <CarsContainer>
      <HeaderBar text="전체차량" />
      <Category />
      {error ? (
        <Notice text={`에러 ${error.message} 담당자에게 문의하세요`} />
      ) : !isLoading ? (
        <CarsList cars={cars} />
      ) : (
        <Notice text="불러오는 중" />
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
