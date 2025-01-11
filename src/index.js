// 運行的入口

//React 兩個核心
import React from "react"
import ReactDOM from "react-dom/client"

// 引入根組件
import App from "./App"

// 把 App 根組件渲染到是 root 的 dom 節點紹
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
