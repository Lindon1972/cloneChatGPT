import React from "react";
import './ChatMessage.css'
import Avatar from "../../assets/avatar";

export const ChatMessage = ({message})=>{
    return(
    <div className={`chat-message ${message.user === 'gpt' && "chatGPT"}`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chatGPT"}`}>
                {message.user === 'gpt' && (
                    <Avatar/>
                )} 
            </div>
            <div className="message">
                {message.message}
            </div> 
        </div>
    </div>
    )
}