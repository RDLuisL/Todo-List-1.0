import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [list,setList]=useState([])
	const tareas =(e)=>{setList([...list,{"label":e ,"done":false}])
		}
	const getTask =()=>{
		fetch("https://assets.breatheco.de/apis/fake/todos/user/bairon00")
		.then(data=>data.json())
		.then(response=>setList(response))
	}
	const putTask=()=>{
		let header= new Headers();
		header.append("content-Type","application/json")
		let cuerpo=JSON.stringify(
			list
			);
		let requesOptions={
			method:"PUT",
			headers:header,
			body:cuerpo,
			redirect:"follow"
		};
		fetch("https://assets.breatheco.de/apis/fake/todos/user/bairon00",requesOptions)
		.then(data=>data.json())
		.then(response=>console.log(response))
	};
useEffect(()=>{
	getTask();

},[]);




	return (
		<div className="text-center">
			
			<form action="submit" onSubmit={(e)=>{e.preventDefault();
			    tareas(e.target[0].value);
				putTask();
				}}>
			<h1 className="text-center mt-5">tareas</h1>
			<input type="text" placeholder="TAREAS" />
			{list.map((elm,indice)=>{
				return <li key={indice}>{elm.label}</li>})}
		</form>
		</div>
	);
};

export default Home;
