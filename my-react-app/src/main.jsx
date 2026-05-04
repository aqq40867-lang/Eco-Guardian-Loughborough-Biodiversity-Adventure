import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // 确保这里指向了你的 App 文件
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* 必须包含这个标签 */}
  </React.StrictMode>,
)