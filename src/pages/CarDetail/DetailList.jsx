import React from "react";
import ListHeader from "./ListHeader";
import ListItems from "./ListItems";
import PropTypes from "prop-types";

export default function DetailList({ text }) {
  return (
    <>
      <ul>
        <ListHeader text={text} />
        <ListItems text={text} />
      </ul>
    </>
  );
}

DetailList.propTypes = {
  text: PropTypes.string,
  attr: PropTypes.object,
  insu: PropTypes.array,
  add: PropTypes.array
};
