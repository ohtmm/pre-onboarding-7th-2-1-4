import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";
import PropTypes from "prop-types";

export default function CarsList({ cars }) {
  return (
    <CarsListContainer>
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

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
};
