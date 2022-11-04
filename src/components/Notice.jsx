import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Notice({ text }) {
  return <NoticeContainer>{text}</NoticeContainer>;
}

const NoticeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

Notice.propTypes = {
  text: PropTypes.text
};
