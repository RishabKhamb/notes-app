import React from "react";
import "./NoteItem.css";

const NoteItem = ({
  myNote,
  myAuthor,
  id,
  deleteHandler,
  editHandler,
  num,
}) => {
  return (
    <>
      <div className="lists">
        <div className="nums">{num}</div>
        <div className="note">
          <h4>{myNote}</h4>
        </div>
        <div className="author">
          <p> {myAuthor}</p>
        </div>
        <div className="actions">
          <i
            onClick={() => editHandler(id)}
            className="fa-solid fa-pen-to-square myedit"
          ></i>
          <i
            onClick={() => {
              deleteHandler(id);
            }}
            className="fa-solid fa-trash myremove"
          ></i>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
