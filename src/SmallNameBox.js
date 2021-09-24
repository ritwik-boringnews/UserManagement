import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPen,
  faPenAlt,
  faPencilAlt,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function SmallNameBox({ data, deleteUser, id, editUser }) {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const deleteUserClick = () => {
    deleteUser(id);
  };
  const editUserClick = () => {
    var Firstname = prompt("New Firstname : ");
    var Lastname = prompt("New Lastname : ");
    editUser(id, Firstname + " " + Lastname);
  };
  return (
    <div class="col-3">
      <div
        style={{
          margin: 5,
          backgroundColor: "white",
          width: "auto",
          textAlign: "center",
          padding: `40px 0 50px`,
          height: 120,
        }}
      >
        <div
          style={{
            color: "red",
            position: "absolute",
            top: 7,
            right: 25,
          }}
        >
          <FontAwesomeIcon icon={faTrash} onClick={deleteUserClick} />
        </div>
        <div
          style={{
            color: "black",
            position: "absolute",
            top: 7,
            right: 50,
          }}
        >
          <FontAwesomeIcon icon={faPencilAlt} onClick={editUserClick} />
        </div>

        <div
          style={{
            fontWeight: "bold",
            justifyContent: "center",
          }}
          class="row"
        >
          <div
            style={{
              backgroundColor: getRandomColor(),
              borderRadius: 50,
              width: 50,
              height: 50,
              fontSize: 30,
            }}
            class="col-6"
          >
            <div
              style={{
                margin: "auto",
                alignSelf: "center",
              }}
            >
              {data.name[0].toUpperCase()}
            </div>
          </div>
          <div
            class="col-6"
            style={{
              paddingLeft: 15,
              marginLeft: 0,
              marginTop: 10,
              textAlign: "start",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
