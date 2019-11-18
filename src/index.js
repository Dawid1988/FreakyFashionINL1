import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

let menuItemList = [
  { name: "Nygeter", url: "#" },
  { name: "Kategorier", url: "#" },
  { name: "Topplistan", url: "#" }
];

ReactDOM.render(
  <header>
    <img
      src="https://via.placeholder.com/300x80?text=Logotype"
      alt="Logotype"
    />
    <ul>
      {menuItemList.map(menuItem => {
        return (
          <li>
            <a href={menuItem.url}>{menuItem.name}</a>
          </li>
        );
      })}
    </ul>
  </header>,
  document.querySelector("#root")
);
