import React , {useState, useEffect} from 'react';

const Tes = () => {
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });
  
    // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             console.log(data);
    //             // Setting a data from api
    //             setdata({
    //                 name: data.Name,
    //                 age: data.Age,
    //                 date: data.Date,
    //                 programming: data.programming,
    //             });
    //         })
    //     );
    // }, []);

    const check = async () => {
        // let s = currentMessage;
        // s.replace(/ /g, '%20');
        const s = "fever";
        let url = `http://localhost:5002/api/${s}`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.text();
        console.log(data);

        
    }

    const check1 = async () => {
        // let s = currentMessage;
        // s.replace(/ /g, '%20');
        const s = "fever";
        let url = `http://localhost:5002/data`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.text();
        console.log(data);

        
    }

    const check2 = async () => {
        // let s = currentMessage;
        // s.replace(/ /g, '%20');
        let s = "i have cough";
        // s.replace(/ /g, '%20');
        let url = `http://localhost:5002/api2`;
        console.log(url);
        fetch(url, {
            method :'post',
            headers : {
                'Accept' :'application/json',
                'Content-Type' : 'application/json'
              },
            body: JSON.stringify({
                "input" : s
            })
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        
        // console.log(data);

        
    }

    const sendMessage = async () => {
        let s = "quit";
        // s.replace(/ /g, '%20');
        let url = `http://localhost:5001/api`;
        console.log(url);
        const response = await fetch(url, {
          method:'POST',
          headers : {
            'Accept' :'application/json',
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            "input": s
          })
        });
        const data = await response.text();
        console.log(data);
        const val = JSON.parse(data).output;
        console.log(val);
        // setMessageList((list) => [...list, currentMessage]);
        // setCurrentMessage("");
    }
  
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <h1>React and flask</h1>
        //         {/* Calling a data from setdata for showing */}
        //         <p>{data.name}</p>
        //         <p>{data.age}</p>
        //         <p>{data.date}</p>
        //         <p>{data.programming}</p>
  
        //     </header>
        // </div>
        <div>
            <button onClick={check}>check</button>
            <button onClick={check1}>check1</button>
            <button onClick={check2}>check2</button>
            <button onClick={sendMessage}>sendMessage</button>
        </div>
    );
}

export default Tes