import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function HeaderBar({ text }) {
  return <Header>{text}</Header>;
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 60px;
  font-weight: 700;
  font-size: 17px;
  border-bottom: 1px solid #000;
`;

HeaderBar.propTypes = {
  text: PropTypes.string.isRequired
};
