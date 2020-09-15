import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const getFriends = () => {
    axiosWithAuth().then((res) => {
      console.log(res);
    });
  };

  return <div>Pootinany</div>;
};

export default FriendsList;
