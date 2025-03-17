import './Nav.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Index from "./page/index";
import Conclusion from "./page/conclusion";

function Navigation() {
    return (
        <nav id='Nav_frame'>
            <img id='Nav_logo' alt='website Logo' src={require('./picture/bjyx.jpg')} />
            <Router>
                <ul id='nav_items'>
                    <li><Link to="/index">首页</Link></li>
                    <li><Link to="/conclusion">知识总结</Link></li>
                    <li><Link to="/resume">简历生成</Link></li>
                    <li><Link to="/download">程序下载</Link></li>
                    <li><Link to="/chat">闲聊</Link></li>
                </ul>

                {/* 使用 Switch 和 Route 来配置路径和组件 */}
                <Routes>
                    <Route path="/index" element={<Index />} />
                    <Route path="/conclusion" element={<Conclusion />} />
                </Routes>
            </Router>
            <div id='Nav_register'>
                <p>登陆</p>
            </div>
        </nav>
    )
}

export default Navigation