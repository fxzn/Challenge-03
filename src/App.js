import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
	const [isRefresh, setIsRefresh] = useState(true);

	const setRefresh = (status) => {
		setIsRefresh(status);
	};

	return (
		<div className="App">
			<div className="content">
				<Router>
					<Routes>
						<Route path="/" element={<TodoList setRefresh={setRefresh} isRefresh={isRefresh}/>}/>
						<Route path="/addTask" element={<Header setRefresh={setRefresh} isRefresh={isRefresh}/>}/>
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
