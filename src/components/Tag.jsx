import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { segmentAtom } from "@/lib/cars-atom";

export default function Tag({ text, seg }) {
  const [carsSegment, setCarsSegment] = useRecoilState(segmentAtom);
  return (
    <TagContainer
      onClick={() => {
        setCarsSegment(seg);
      }}
    >
      {text}
    </TagContainer>
  );
}

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 27px;
  margin-right: 12px;
  padding: 5px 18px;
  border-radius: 62px;
  font-weight: 700;
  font-size: 14px;
  background-color: #d9d9d9;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #222;
  }
`;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  seg: PropTypes.string
};
