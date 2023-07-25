import React, { useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";

export const Messages = () => {
  const [
    messages,
    // setMessages
  ] = useState([
    {
      id: 1,
      title: "test message 1",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 2,
      title: "test message 2",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 3,
      title: "test message 3",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 4,
      title: "test message 4",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
    {
      id: 5,
      title: "test message 5",
      sender: "Ivanov Viktor",
      date: "21.07.2023",
    },
  ]);

  return (
    <SC.MessagesContainer>
      <SC.MessagesList>
        {messages.map((item) => (
          <MessageItem key={item.id} message={item} />
        ))}
      </SC.MessagesList>
    </SC.MessagesContainer>
  );
};

export default Messages;
