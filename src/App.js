import React, { useState } from "react";
import data from "./data/data.json";
import SmallNameBox from "./SmallNameBox";
import Form from "./Form";
export default function App() {
  const [allUser, setallUser] = useState(data);
  const addUser = (name) => {
    setallUser([
      ...allUser,
      {
        id: allUser.length + 1,
        name: name,
      },
    ]);
  };
  const deleteUser = (id) => {
    const result = allUser.filter((word) => word.id != id);
    console.log(id);
    setallUser([...result]);
  };
  const editUser = (id, name) => {
    const result = allUser.filter((word) => word.id != id);
    console.log(id);
    setallUser([
      ...result,
      {
        id: id,
        name: name,
      },
    ]);
  };
  return (
    <>
      <div>
        <div class="row" style={{ backgroundColor: "#DEDEDE" }}>
          {allUser.map((e) => (
            <SmallNameBox
              data={e}
              key={e.id}
              deleteUser={deleteUser}
              editUser={editUser}
              id={e.id}
            />
          ))}
        </div>
      </div>
      <Form onPress={addUser} />
    </>
  );
}
