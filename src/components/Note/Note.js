import React from "react";
import "./Note.css";
import deleteIcon from "../../assets/delete.png";

let timer = 500,
  timeout;
export const Note = (props) => {
  const formateDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    let hrs = date.getHours(value);
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = hrs - 12) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const months = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${months}`;
  };
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer">
        <p>{formateDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          onClick={() => props.deleteNote(props.note.id)}
          alt="delete"
        />
      </div>
    </div>
  );
};
