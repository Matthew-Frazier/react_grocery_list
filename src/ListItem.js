import React from 'react';

const ListItem = ({ id, name, picked, listClick }) => (
  <li
    style={ picked ? {...styles.list_item, ...styles.picked } :styles.list_item}
    onClick={ () => listClick(id) }
  >
    {name}
  </li>
);

const styles = {
  list_item: {cursor: "pointer"},
  picked: {color: "grey", textDecoration: "line-through"},
};

export default ListItem