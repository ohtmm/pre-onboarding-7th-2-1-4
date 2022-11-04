import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { segmentAtom } from "@/lib/cars-atom";
import { theme } from "@/styles/theme";

// export interface ITag {
//   text: string;
//   seg: string;
//   bgColor: string;
//   color: string;
// }

export default function Tag(
  // props: object,
  { text, seg, bgColor, color }
) {
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

export const TagContainer = styled.div`
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
  background-color: ${(props) => props.theme.color.gray};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
  }
`;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  seg: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
};
