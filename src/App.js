import React from "react";
import data from "./data/data.json";
import SmallNameBox from "./SmallNameBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPen,
  faPenAlt,
  faPencilAlt,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export default function App() {
  console.log(data);

  return (
    <div>
      <div class="row" style={{ backgroundColor: "#DEDEDE" }}>
        {data.map((e) => (
          <SmallNameBox data={e} key={e.id} />
        ))}
      </div>
      <div
        style={{
          border: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: "10",
          // backgroundColor: "green",
          marginTop: 20,
          paddingBottom: 20,
        }}
      >
        <div class="row">
          <div class="col-6">
            <h3
              style={{
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              Add User
            </h3>
          </div>
          <div class="col-6 row">
            <div class="col-11"></div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faTimes} size="3x" />
            </div>
          </div>
        </div>
        <hr />
        <form
          style={{
            backgroundColor: "white",
            fontSize: 30,
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
          }}
        >
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>First Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your first name"
              width="100%"
              style={{ borderRadius: 6 }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Last Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your last name"
              style={{ borderRadius: 6 }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Profiles</div>

            <select style={{ borderRadius: 6 }}>
              <option value="Na">Select...</option>
            </select>
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>UserName</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              style={{ borderRadius: 6 }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>
              Email Address
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your email id"
              style={{ borderRadius: 6 }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Password</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your Password"
              style={{ borderRadius: 6 }}
            />
          </label>
        </form>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            // margin: 10,
          }}
        >
          <input
            type="submit"
            value="Cancel"
            style={{
              marginRight: 20,
              height: 40,
              width: 90,
              fontWeight: "bold",
            }}
          />
          <input
            type="submit"
            value="Add"
            style={{
              marginRight: 20,
              backgroundColor: "green",
              fontWeight: "bold",

              height: 40,
              width: 90,
            }}
          />
        </div>
      </div>
    </div>
  );
}
