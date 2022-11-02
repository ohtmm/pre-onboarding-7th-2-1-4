import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ListHeader({ text }) {
  return <ListHeaderContainer>{text}</ListHeaderContainer>;
}

const ListHeaderContainer = styled.li`
  width: 100%;
  height: 48px;
  padding: 13px 0 0 20px;
  color: #fff;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  background-color: #0094ff;
`;

ListHeader.propTypes = {
  text: PropTypes.string.isRequired
};
