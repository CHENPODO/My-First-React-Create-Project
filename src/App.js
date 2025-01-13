// 項目的根組建
// APP > 引入 index.js > public/index.html(root)

import "./style.css"
import TodoList from "./listPractice.js"
import Counter from "./counter.js"

const list2 = [{ id: "1", Todo: "練習React" }]

const count = 100
function getName() {
	return "John Doe"
}
const list = [
	{ id: "1", name: "HTML" },
	{ id: "2", name: "CSS" },
	{ id: "3", name: "Vue" },
	{ id: "4", name: "React" },
	{ id: "5", name: "Angular" },
	{ id: "6", name: "Node.js" },
	{ id: "7", name: "MongoDB" },
	{ id: "8", name: "Python" },
]

function App() {
	return (
		// Day1 練習
		<div className="App">
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>this is App</div>
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/*引號傳遞字串*/}
				{"this is message"}
			</div>
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/* 使用JS變量 */}
				{count}
			</div>
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/* 函數調用 */}
				{getName()}
			</div>
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/* 方法調用 */}
				{new Date().getDate()}
			</div>
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/* 使用JS對象 */}
				<div style={{ color: "darkblue" }}>this is div</div>
			</div>

			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				{/* Day2練習  */}

				{/* 渲染列表 */}
				<ul className="custom-list">
					{list.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
			{/* 練習渲染列表 使用props  */}
			<div style={{ padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "10px", marginTop: "8px" }}>
				<h3 style={{ padding: "10px" }}>這是透過props傳入</h3>
				<TodoList items={list2} />
				{/* 傳入 list 作為 props */}
			</div>
			{/* 計數器 */}
			<div style={{ background: "#f0f0f0", padding: "10px", marginTop: "8px", borderRadius: "10px" }}>
				<Counter initialCount={0} step={1} />
			</div>
		</div>
	)
}

export default App
