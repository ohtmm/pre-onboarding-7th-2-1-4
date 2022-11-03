import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { carsAtom } from "@/lib/cars-atom";
import { useParams } from "react-router-dom";

export default function ListItems({ text }) {
  const { id } = useParams();
  const [cars] = useRecoilState(carsAtom);
  const selectedCar = cars[id - 1];
  const { additionalProducts, insurance, attribute, startDate } = selectedCar;
  if (text === "차량정보") {
    return (
      <>
        <ListItem>
          <p>차종</p>
          <span>{attribute.segment}</span>
        </ListItem>
        <ListItem>
          <p>연료</p>
          <span>{attribute.fuelType}</span>
        </ListItem>
        <ListItem>
          <p>이용 가능일</p>
          <span>{startDate}</span>
        </ListItem>
      </>
    );
  }
  if (text === "보험") {
    return (
      <>
        {insurance.map((item, idx) => {
          return (
            <ListItem key={idx}>
              <p>{item.name}</p>
              <span>{item.description}</span>
            </ListItem>
          );
        })}
      </>
    );
  }
  if (text === "추가상품") {
    return (
      <>
        {additionalProducts.map((item, idx) => {
          return (
            <ListItem key={idx}>
              <p>{item.name}</p>
              <span>{item.amount}원</span>
            </ListItem>
          );
        })}
      </>
    );
  }
}

const ListItem = styled.li`
  display: flex;
  padding: 13px 21px 14px 19px;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  p {
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
  }
  span {
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    text-align: right;
  }
`;

ListItems.propTypes = {
  text: PropTypes.string,
  selectedCar: PropTypes.object,
  insurance: PropTypes.object,
  additionalProducts: PropTypes.object
};
