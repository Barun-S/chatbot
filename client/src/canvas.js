import React, {useEffect, useCallback, useState, useRef} from "react";
import './canvas.css'

const colors = [
    "red",
    "green",
    "yellow",
    "orange",
  ]

const values = [
"pain",
"itching",
"rash",
"burning sensation",
]


const Canvas = ({imagesrc}) => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  var zoomIntensity = 0.1;
  var scale = 1;
var orgnx = window.innerWidth/2;
var orgny = window.innerHeight/2;
var width = 1000;
        var height = 900;
var visibleWidth = 1500;
        var visibleHeight = 600;
  let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedVal, setSelectedVal] = useState("pain");
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {



    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d'); 
    }

    function drawhere(){
        const ct = canvasRef.current.getContext('2d');
        var imageObj1 = new Image();
        imageObj1.setAttribute('crossOrigin', 'anonymous');
        imageObj1.src = `${imagesrc}` ;
        //imageObj1.setAttribute('crossOrigin','anonymous');
        imageObj1.onload = function() {
            ct.drawImage(imageObj1,0,0, 550, 800);
        }     
    }
    drawhere();

  }, [imagesrc]);

//   <a href="https://ibb.co/R0PNzPS"><img src="https://i.ibb.co/58vkBv9/Screenshot-from-2022-12-30-12-06-43.png" alt="Screenshot-from-2022-12-30-12-06-43" border="0"></a><br /><a target='_blank' href='https://usefulwebtool.com/'>keyboard fonts free</a><br />

  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = 4;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
    var imageObj1 = new Image();
    imageObj1.setAttribute('crossOrigin', 'anonymous');
    imageObj1.src = `${imagesrc}` ;
    //imageObj1.setAttribute('crossOrigin','anonymous');
    imageObj1.onload = function() {
        ctx.current.drawImage(imageObj1,0,0, 550, 800);
    } 
  }

//   const zoom = () => {
//     ctx.current.scale(2,2);
//   }

//   const zoominverse= () => {
//     ctx.current.scale(0.5,0.5);
//   }

  const onMouseDown = (e) => {
    const boundingRect = canvasRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - boundingRect.left,
      y: e.clientY - boundingRect.top
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    const boundingRect = canvasRef.current.getBoundingClientRect();

    draw(e.clientX - boundingRect.left,e.clientY - boundingRect.top)
  }

//   const nzoom = () => {
//     const boundingRect = canvasRef.current.getBoundingClientRect();
//     ctx.current.translate((boundingRect.left+boundingRect.right)/2, (boundingRect.top+boundingRect.bottom)/2); 
//     ctx.current.scale(2,2);
//     ctx.current.translate(boundingRect.left, boundingRect.top); 
//   }

  const zoom = (event) => {
    // event.preventDefault();
   // console.log(canvasRef.offsetLeft);
    var x = event.clientX - canvasRef.offsetLeft;
    var y = event.clientY - canvasRef.offsetTop;
    var scroll = event.deltaY < 0 ? 1 : -2;

    var zoom = Math.exp(scroll * zoomIntensity);

    ctx.current.translate(orgnx, orgny);
    console.log("here");
    orgnx -= x / (scale * zoom) - x / scale;
    orgny -= y / (scale * zoom) - y / scale;

    ctx.current.scale(zoom, zoom);
    ctx.current.translate(-orgnx, -orgny);

    // Updating scale and visisble width and height
    scale *= zoom;
    visibleWidth = width / scale;
    visibleHeight = height / scale;
  }

  const handlecolor = (e) => {
        if(e.target.value === "pain"){
            setSelectedVal("pain");
            setSelectedColor("red");
        }
        if(e.target.value === "itching"){
            setSelectedVal("itching");
            setSelectedColor("green");
        }
        if(e.target.value === "rash"){
            setSelectedVal("rash");
            setSelectedColor("yellow");
        }
        if(e.target.value === "burning sensation"){
            setSelectedVal("burning sensation");
            setSelectedColor("orange");
        }
        
  }

  return (
    <div className="maincanvas">
        <div><canvas
          style={{
            border: "1px solid #000",
            marginLeft : "30%",
            marginRight : "30%"
            // background : `url(${body})`,
            // backgroundSize : '100% 100%',
          }}
          width={550}
          height={800}
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        //   onWheel = {(e) => zoom(e)}
        />
        </div>
        <div style = {{
            "display" : "flex",
            "marginLeft": "30%",
            "height" : "40px",
            
            // "marginRight": "30%",
        }}>
        <select
          value={selectedVal}
          style={{
            "fontSize" : "1.2em"
        }}
          onChange={(e) => handlecolor(e)}
        >
          {
            values.map(
              color => <option key={color} value={color}>{color}</option>
            )
          }
        </select>
        {/* <img src = {body} alt = "nope"/> */}
        
        <button onClick={clear} style={{
            "fontSize" : "1.2em"
        }}>Clear</button>
        <button style={{
            "fontSize" : "1.2em"
        }} onClick={download}>Download</button>
        <div style = {{
            "paddingLeft" : "100px",
            "fontSize" : "1.2em",
            "marginRight" :  "0%"
        }}><label><input type = "checkbox"/> Is internal </label></div>
        </div>
        {/* <button onClick={nzoom}>zoom</button> */}
    </div>
  )
}

export default Canvas;