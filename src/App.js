// 項目的根組建
// APP > 引入 index.js > public/index.html(root)

const count = 100
function getName() {
	return "John Doe"
}

function App() {
	return (
		<div className="App">
			this is App
			{/*引號傳遞字串*/}
			{"this is message"}
			{/* 使用JS變量 */}
			{count}
			{/* 函數調用 */}
			{getName()}
			{/* 方法調用 */}
			{new Date().getDate()}
			{/* 使用JS對象 */}
			<div style={{ color: "darkblue" }}>this is div</div>
		</div>
	)
}

export default App
