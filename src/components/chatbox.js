import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import { analyze } from './util';

export default function ChatBox() {
    const [messages, setMessages] = useState([
        {
            message: 'Hi May i have your name?'
        }
    ]);
    const [text, setText] = useState("");
    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) { 
            const reply = analyze(text)
            list = [
                ...list,
                {message:reply}
            ]
        }
        else {
            list = [
                ...list,
                {
                    message:`Hi,${text}`,
                },
                {
                    message:"How can i help you?",
                },
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 1);
    };

    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?w=740&t=st=1692555228~exp=1692555828~hmac=7bccd84d614ab2bcaf052062a783223b0d3156c6bff8a58ab1635c582b21011e"
                    alt="logo"
                    height={200 }
                    width={200}
                />
              <h2 className='text-primary'>Chatbot</h2>
            </div>
            <div className='chat-message'>
                {
                    messages.length > 0 && messages.map((data) => <ChatMessage{...data} />)
                }
                <div className='d-flex'>
                    <input type='text' className='form-control' value={text} onChange={(e)=>setText(e.target.value) } />
                    <button type="bt-bt-Primary" className='ms-3' onClick={onSend}>Send </button>
                </div>
                <div id='copyright' className='mt-3'>copyright @2023</div>
            </div>
        </div>
    )
}