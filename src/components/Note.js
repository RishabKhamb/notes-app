import React, { useState, useEffect } from "react";
import "./Note.css";
import NoteItem from "./NoteItem";

const getLocalItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    // console.log(JSON.parse(localStorage.getItem("items")));
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Note = ({ onAdd }) => {
  const [note, setNote] = useState("");
  const [auth, setAuth] = useState("");
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(null);
  const [notes, setNotes] = useState(getLocalItems());

  const submitHandler = (event) => {
    event.preventDefault();
    if (!note) {
      alert("Note field can't be empty!");
    } else if (!auth) {
      alert("author field can't be empty");
    } else if (note && auth && edit) {
      let myEditedData = notes.map((item) => {
        if (item.id === edit) {
          return { ...item, note: note, author: auth };
        }
        return item;
      });
      setNotes(myEditedData);
    } else {
      let myData = {
        note: note,
        author: auth,
        id: new Date().getTime().toString(),
      };
      setNotes((prev) => {
        return [...prev, myData];
      });
    }
    setNote("");
    setAuth("");
  };

  const editHandler = (id) => {
    setEdit(id);
    let myEditData = notes.find((item) => {
      return item.id === id;
    });

    setNote(myEditData.note);
    setAuth(myEditData.author);
  };

  const deleteHandler = (id) => {
    let myData = notes.filter((item) => {
      return item.id !== id;
    });
    console.log(myData);
    setNotes(myData);
  };

  const cancelHandler = () => {
    setAuth("");
    setNote("");
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(notes));
  }, [notes]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  let content = (
    <h2 style={{ margin: "0 auto" }}>No notes found add some notes!</h2>
  );

  if (notes.length > 0) {
    content = notes
      .filter((item) => {
        return (
          item.note.toLowerCase().includes(search.toLowerCase()) ||
          item.author.toLowerCase().includes(search.toLowerCase())
        );
      })
      .map((item, index) => {
        return (
          <NoteItem
            num={index + 1}
            myNote={item.note}
            myAuthor={item.author}
            key={item.id}
            id={item.id}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        );
      });
  }

  return (
    <>
      <form className="myform">
        <label>Note</label>
        <input
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Add a note"
          value={note}
        />
        <label>Author</label>
        <input
          onChange={(e) => setAuth(e.target.value)}
          type="text"
          placeholder="Add author name"
          value={auth}
        />
        <div>
          <button onClick={cancelHandler} className="action">
            Cancel
          </button>
          <button onClick={submitHandler} type="submit" className="action">
            Add
          </button>
        </div>
      </form>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Notes</h1>
      <div className="find">
        <label>Search notes: </label>
        <input style={{ margin: "0 auto" }} onChange={searchHandler} />
      </div>
      <div className="note-container">{content}</div>
    </>
  );
};

export default Note;
