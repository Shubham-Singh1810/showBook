import React from "react";

function Card(props) {
  console.log(props.listData);
  return (
    <div className="card">
      <img src={props.listData.img} className="img-fluid"/>
      <p className="rating margin0"><img src="https://www.pngall.com/wp-content/uploads/12/Red-Star-Symbol-PNG-Pic.png"/>8.1/10 <i>2.9k votes</i></p>
     {props.listData.title && <p className="margin0 p-1 mono"><b>Title</b>: {props.listData.title}</p>}
      <p className="margin0 p-1 mono"><b>Type</b>: {props.listData.type}</p>
    </div>
  );
}

export default Card;
