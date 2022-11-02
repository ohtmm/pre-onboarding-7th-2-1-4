import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

export default function Category() {
  return (
    <CategoryContainer>
      <Tag text="전체" />
      <Tag text="대형" />
      <Tag text="중형" />
      <Tag text="소형" />
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 6px 12px;
`;
