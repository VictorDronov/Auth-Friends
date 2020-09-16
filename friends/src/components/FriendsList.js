import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsForm from "./FriendsForm";
import "../App.css"

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getFriends();
  }, []);

  const removeFriend = (id) => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => [console.log(err)]);
  };
  // const editFriend = (id) => {
  //   axiosWithAuth()
  //     .put(`/api/friends/${id}`)
  //     .then((res) => {
  //       setFriends(res.data);
  //     })
  //     .catch((err) => [console.log(err)]);
  // };
  return (
    <div className="firendsBox">
      {friends.map((friend) => {
        return (
          <div className="friendCard" key={friend.id}>
            <h2>{friend.name}</h2>
            <div>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
            {/* <button onClick={() => editFriend(friend.id)}>Edit</button> */}
            <button onClick={() => removeFriend(friend.id)}>
              Remove Friend
            </button>
          </div>
        );
      })}
      <FriendsForm />
    </div>
  );
};

export default FriendsList;
