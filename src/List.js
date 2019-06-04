import React from "react";
import ListItem from "./ListItem";

const List = ({ items, name, listClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <ListItem key={item.id} {...item} listClick={listClick} />)}
    </ul>
  </div>
);

export default List;