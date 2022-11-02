import React from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

export default function DetailList({ text }) {
  return (
    <ul>
      <ListHeader text={text} />
      <ListItem text="차종" />
      <ListItem text="연료" />
      <ListItem text="이용 가능일" />
    </ul>
  );
}

DetailList.propTypes = {
  text: PropTypes.string.isRequired
};
