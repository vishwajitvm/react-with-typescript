import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! you have ${props.messageCount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
}
