//useState 它是 React 16.8 版本開始引入的一部分。
// 使用時可以為組件定義 局部狀態變數，並透過更新函數 來更新其值。
import { useState } from "react"

//props 是 "properties" 的縮寫，用於在組件之間傳遞資料

function Counter({ initialCount = 0, step = 1 }) {
	const [count, setCount] = useState(initialCount) // 使用 props 作為初始值
	return (
		<div>
			<h2>計數器</h2>
			<p>目前計數器的值為：{count}</p>
			<button style={{ color: "#f0f0f0", borderRadius: "2px", margin: "2px", border: "none", backgroundColor: "green" }} onClick={() => setCount(count + step)}>
				增加
			</button>
			<button style={{ color: "#f0f0f0", borderRadius: "2px", margin: "2px", border: "none", backgroundColor: "green" }} onClick={() => setCount(count - step)}>
				減少
			</button>
			<button style={{ color: "#f0f0f0", borderRadius: "2px", margin: "2px", border: "none", backgroundColor: "green" }} onClick={() => setCount(count - step)}>
				歸零
			</button>
		</div>
	)
}

export default Counter
