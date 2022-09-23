// import React, { useState, useEffect } from "react";
// import Form from "./Form";

// const getLocalItems = () => {
//   let list = localStorage.getItem("items");
//   console.log(list);
//   if (list) {
//     // console.log(JSON.parse(localStorage.getItem("items")));
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// const Note = () => {
//   const [notes, setNotes] = useState(getLocalItems());
//   const addNoteHandler = (note, auth) => {
//     let myData = {
//       note: note,
//       author: auth,
//       id: new Date().getTime().toString(),
//     };
//     setNotes((prev) => {
//       return [...prev, myData];
//     });
//   };

//   // add data to localStorage
//   useEffect(() => {
//     localStorage.setItem("items", JSON.stringify(notes));
//   }, [notes]);

//   return (
//     <div>
//       <Form onAdd={addNoteHandler} />
//       <ul>
//         {notes.map((ele) => {
//           return <li key={ele.id}>{ele.note}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Note;
