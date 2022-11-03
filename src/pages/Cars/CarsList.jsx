import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";
import PropTypes from "prop-types";

export default function CarsList({ cars }) {
  return (
    <CarsListContainer>
      {!cars.length && <Notice>차량이 없습니다</Notice>}
      {cars.map((car) => {
        return <CarItem key={car.id} car={car} />;
      })}
    </CarsListContainer>
  );
}

const CarsListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Notice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
};
