import React from 'react';
import Top from "../components/chat/top/Top";
import Window from "../components/chat/window/Window"
import "../styles/chat/Chat.css";

function Chat(){
    return (
      <div>
        <Top></Top>
        <Window></Window>
      </div>
    );
}
export default Chat;