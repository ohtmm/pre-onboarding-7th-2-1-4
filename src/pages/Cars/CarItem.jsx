// import Tag from "@/components/Tag";
import React from "react";
import styled from "styled-components";

export default function CarItem() {
  // carsitem ui 렌더링
  return (
    <CarItemContainer>
      <ItemText>
        <h3>기아</h3>
        <h3>EV6</h3>
        <p> 중형 / 전기</p>
        <p> 월 600,000원 부터</p>
      </ItemText>
      {/* <ItemTag text="신규" /> */}
      <ItemImg />
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

// const ItemTag = styled(Tag)`
//   position: absolute;
//   right: 0;
//   top: 0;
//   width: 52px;
//   height: 22px;
//   color: #fff;
//   background-color: #0094ff;
//   border-radius: 42px;
// `;
