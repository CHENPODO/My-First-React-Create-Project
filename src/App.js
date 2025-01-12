// 項目的根組建
// APP > 引入 index.js > public/index.html(root)

import "./style.css"

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
			<div>this is App</div>
			<div>
				{/*引號傳遞字串*/}
				{"this is message"}
			</div>
			<div>
				{/* 使用JS變量 */}
				{count}
			</div>
			<div>
				{/* 函數調用 */}
				{getName()}
			</div>
			<div>
				{/* 方法調用 */}
				{new Date().getDate()}
			</div>
			<div>
				{/* 使用JS對象 */}
				<div style={{ color: "darkblue" }}>this is div</div>
			</div>

			<div>
				{/* Day2練習  */}

				{/* 渲染列表 */}
				<ul className="custom-list">
					{list.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
