import './CSS/Nav.css'
import { Link, useNavigate } from 'react-router-dom';


function Navigation() {

    const register_navigate = useNavigate();

    return (
        <nav id='Nav_frame'>
            <img id='Nav_logo' alt='website Logo' src={require('./Picture/bjyx.jpg')} />

            <ul id='nav_items'>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/conclusion">知识总结</Link></li>
                <li><Link to="/resume_produce">简历生成</Link></li>
                <li><Link to="/download_app">程序下载</Link></li>
                <li><Link to="/chat_something">闲聊</Link></li>
            </ul>

            <div id='Nav_register'>
                <span>登陆</span>
                <span> / </span>
                <button onClick={() => register_navigate("/register")}>注册</button>
            </div>
        </nav>
    )
}
export default Navigation