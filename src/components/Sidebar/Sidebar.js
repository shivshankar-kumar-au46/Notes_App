import { useState } from "react";
import plusicon from "../../assets/plusicon.jpg";
import "./Side.css";

export const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <div className="sidebar">
      <img src={plusicon} alt="add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar-list-itmes "
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};
