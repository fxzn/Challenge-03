import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setRefresh }) => {
	const [task, setTask] = useState("");
	const navigate = useNavigate()

	const addTodo = () => {
		const newTodo = { task, complete: false };

		fetch("http://localhost:8000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTodo),
		}).then(() => {
			setTask("");
			setRefresh(true);

			setTimeout(() => {
				alert("new todo added.");
			}, 500);
		});
	};

	return (
		<div id="todo-header" className="header">
			<h2>Idd Niw Tidi</h2>
			
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<span className="add-button" onClick={addTodo}>
				Add
			</span>
			<button className="add-button-task" onClick={() => navigate('/')}>HOME</button>
		</div>
	);
};

export default Header;
