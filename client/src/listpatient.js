import React , {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import {redirect} from "react-router-dom";
import './lpstyle.css'

const Listofpatients = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("component rendered");
        fetch("http://localhost:5001/fetchallresponses")
        .then((response) => response.json())
        .then((d) => {
            //console.log(d.data);
            const t = [];
            for(let i = 0; i< d.length; i++){
                let k = {
                    id : i,
                    firstname : d[i].personal_info[0].response,
                    age : d[i].personal_info[1].response, 
                    gender : d[i].personal_info[2].response,
                    responses : d[i].questions_responses
                }
                t.push(k);
            }
            setData(t);
        })
        .catch((err) => (console.log(err)))
    }, [])

    const redir = () => {

    }

    return (
        <div>
            <div className='titlebar'> Patient Conversations </div>
           {data.map((obj) => {
            return(
                <div className='parent'>
                <div className='patient' id ={obj.id}>
                    <div>
                        <div style = {{
                            "fontSize" : "1.8em",
                        }}>Patient Data</div>
                        <div><p>Name : {obj.firstname}</p></div>
                        <div><p>Age : {obj.age}</p></div>
                        <div><p>Gender : {obj.gender}</p></div>
                    </div>
                    <div>
                        <Link to={"/patientconvo"} state={{ convo : obj.responses}}>view patient screening</Link>
                    </div>
                </div>
                </div>
            );
           })}
        </div>
    )

}

export default Listofpatients