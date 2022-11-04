// import Tag from "@/components/Tag";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Tag, { TagContainer } from "@/components/Tag";
import { theme } from "@/styles/theme";

export default function CarItem({ car }) {
  const { brand, name, segment, fuelType, imageUrl } = car.attribute;
  const { id, amount } = car;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <CarItemContainer onClick={handleClick}>
      <ItemText>
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <p>
          {segment} / {fuelType}
        </p>
        {/* <p> 월 {amount}원 부터</p> */}
      </ItemText>
      <ItemTag>신규</ItemTag>
      <ItemImg src={`${imageUrl}`} />
    </CarItemContainer>
  );
}

const CarItemContainer = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 120px;
  border-top: 1px solid #000;
  cursor: pointer;
  &:last-of-type {
    border-bottom: 1px solid #000;
  }
`;

const ItemText = styled.div`
  position: absolute;
  top: 24px;
  left: 20px;
  height: 100%;

  h3 {
    height: 17px;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    &:last-of-type {
      margin-bottom: 8px;
    }
  }
  p {
    height: 15px;
    margin: 0;
    font-weight: 500;
    font-size: 12px;
  }
`;

const ItemImg = styled.img`
  position: absolute;
  right: 20px;
  display: block;
  width: 152px;
  height: 80px;
  background-color: #d2d2d2;
`;

const ItemTag = styled(TagContainer)`
  z-index: 100;
  position: absolute;
  top: 10px;
  right: 0;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.blue};
`;

CarItem.propTypes = {
  car: PropTypes.object.isRequired
};
