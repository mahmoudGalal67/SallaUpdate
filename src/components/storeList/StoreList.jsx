import React from "react";

function StoreList() {
  return (
    <ul className="menu-sub">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-three">
          قوائم المتجر
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
      <li>
        <a href="#">Sub-item</a>
      </li>
    </ul>
  );
}

export default StoreList;
