//分檔案練習
//渲染列表

import React from "react"

function TodoList({ items }) {
	return (
		<div>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.Todo}</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
