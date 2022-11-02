import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function ListItem({ text }) {
  return (
    <ListItemContainer>
      <p>차종</p>
      <span>차종.중형</span>
    </ListItemContainer>
  );
}

const ListItemContainer = styled.li`
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

ListItem.propTypes = {
  text: PropTypes.string.isRequired
};
