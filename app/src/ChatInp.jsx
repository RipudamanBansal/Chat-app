import { useState } from "react";
import msgs from "./Data/msgs.js";
import ChatBox from "./ChatBox.jsx";

export default function ChatInp() {
  const [chatList, setChatList] = useState(msgs);

  let tempList = {};

  function handleChange(e) {
    tempList[e.target.name] = e.target.value;
    console.log(tempList);
    tempList["type"] = "sent";
  }

  function onClick(e) {
    e.preventDefault();
    console.log("pressed");
    const date = new Date();
    console.log(date.getTime());
    tempList["time"] = date.getTime();
    setChatList([...chatList, tempList]);
    console.log(chatList);
  }

  return (
    <>
      <ChatBox msgList={chatList}></ChatBox>
      <form action="">
        <input type="text" name="content" onChange={handleChange} />
        <button onClick={onClick}>Submit</button>
      </form>
    </>
  );
}
