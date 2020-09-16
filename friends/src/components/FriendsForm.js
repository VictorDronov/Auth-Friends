import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ititialFriendValue = {
  name: "",
  age: "",
  email: "",
};

const FriendsForm = () => {
  const [newFriend, setNewFriend] = useState(ititialFriendValue);

  const sendNewFriend = () => {
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChanges = (e) => {
    e.preventDefault();

    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>Import A New Friend</h3>
      <form onSubmit={sendNewFriend}>
        <label>
          Name: <input type="text" name="name" onChange={inputChanges} />
        </label>
        &nbsp;
        <label>
          Age: <input type="number" name="age" onChange={inputChanges} />
        </label>
        &nbsp;
        <label>
          Email: <input type="text" name="email" onChange={inputChanges} />
        </label>
        &nbsp;
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendsForm;
