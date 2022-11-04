import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";
import PropTypes from "prop-types";
import Notice from "@/components/Notice";

export default function CarsList({ cars }) {
  return (
    <CarsListContainer>
      {!cars.length && <Notice text="차량이 없습니다" />}
      {cars.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
    </CarsListContainer>
  );
}

const CarsListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
};
