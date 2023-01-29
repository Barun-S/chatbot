import React , {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import './pc.css'

const Conversation = () => {

   
    const location = useLocation();
    const {convo} = location.state;
    console.log(convo);

    return (
        <div>
        <div className='titlebar'> Patient Chat </div> 
        <div className="content1">
           
            <div className="child">
            {convo.map((question) => {
                return(
                    <div style ={{
                        "margin" : "10px",
                    }}>
                        <div style = {{
                            "margin" : "3px",
                            "color" : "green"
                        }}>{question.question}</div>
                        <div style = {{
                            "margin" : "3px",
                            "color" : "purple"
                        }}>{question.response}</div>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}

export default Conversation;