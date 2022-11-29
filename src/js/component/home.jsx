import React, { useState } from "react";
 
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [lista, setLista] = useState([])
const norefresh =(evento) => {evento.preventDefault();
console.log(evento.target[0].value)
setLista([... lista,evento.target[0].value])
}
const DeleteItems = (indexItem) => {
    setLista((prevState) =>
      prevState.filter((elemento, indice) => indice !== indexItem)
    );
  };

	return (
		<div  className="container position-relative">
			<img src="https://imagizer.imageshack.com/img923/3784/tgL04X.png" className="agenda position-absolute"></img>
			<form type="submit" onSubmit={norefresh}>
			{/* <p> Tareas:</p> */}
			<input type="text" className="position-relative" placeholder="type down your task"></input>
			</form>
			<ul>
				{lista.map((elemento, indice)=>{
					return <li key={indice}>{elemento} <button className="btn" onClick={() => DeleteItems(indice)}>
					<i className="fas fa-trash-alt" />
				  </button></li>
				})}
			</ul>
		</div>

	);
};

export default Home;