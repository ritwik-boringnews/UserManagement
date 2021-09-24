import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Form({ onPress }) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cross, setCross] = useState("");
  const [profile, setprofile] = useState("Na");
  let onPresscancel = () => {
    setfirstname("");
    setlastname("");
    setemail("");
    setusername("");
    setpass("");
    setprofile("Na");
  };
  let onPressAdd = () => {
    onPress(firstname + " " + lastname);
    onPresscancel();
  };
  let crossClick = () => {
    setCross("none");
  };
  let onPressCross = () => {
    setCross("");
  };
  if (cross === "none") {
    return (
      <input
        type="submit"
        value="AddMember"
        style={{
          marginLeft: "100vh",
          backgroundColor: "green",
          fontWeight: "bold",
          height: 40,
          // width: 90,
        }}
        onClick={onPressCross}
      />
    );
  } else
    return (
      <div
        style={{
          border: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: "10",
          marginTop: 20,
          paddingBottom: 20,
          display: cross,
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
              <FontAwesomeIcon icon={faTimes} size="3x" onClick={crossClick} />
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
              style={{ borderRadius: 6, width: "194vh" }}
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Last Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your last name"
              style={{ borderRadius: 6, width: "194vh" }}
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Profiles</div>

            <select
              style={{ borderRadius: 6, width: "194vh" }}
              value={profile}
              onChange={(e) => {
                setprofile(e.target.value);
              }}
            >
              <option value="Na">Select...</option>
              <option value="student">Student</option>
            </select>
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>UserName</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              style={{ borderRadius: 6, width: "194vh" }}
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
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
              style={{ borderRadius: 6, width: "194vh" }}
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            <div style={{ fontWeight: "bold", margin: "auto" }}>Password</div>
            <input
              type="password"
              name="name"
              placeholder="Enter your Password"
              style={{ borderRadius: 6, width: "194vh" }}
              value={pass}
              onChange={(e) => {
                setpass(e.target.value);
              }}
            />
          </label>
        </form>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
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
            onClick={onPresscancel}
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
            onClick={onPressAdd}
          />
        </div>
      </div>
    );
}
