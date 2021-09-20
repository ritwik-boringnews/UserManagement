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

export default function SmallNameBox({ data }) {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
          //   boxShadow: `5px 5px 5px 5px gray`,
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
          <FontAwesomeIcon icon={faTrash} />
        </div>
        <div
          style={{
            color: "black",
            position: "absolute",
            top: 7,
            right: 50,
          }}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </div>

        <div
          style={{
            fontWeight: "bold",
            // alignContent: "center",
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
              // textAlign: "center",
              overflow: "hidden",
              // justifyContent: "center",
              // alignItems: "center",
              // padding: "auto",
              // margin: "auto",
            }}
            class="col-6"
          >
            <div
              style={{
                margin: "auto",
                alignSelf: "center",
                // backgroundColor: "blue",
              }}
            >
              {data.name[0].toUpperCase()}
            </div>
          </div>
          {/* <FontAwesomeIcon icon={faTimes} /> */}
          <div
            class="col-6"
            style={{
              // backgroundColor: "blue",
              paddingLeft: 15,
              marginLeft: 0,
              marginTop: 10,
              textAlign: "start",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "blue",
              // paddingVertical: "auto",
              // margin: "auto",
            }}
          >
            {data.name.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
