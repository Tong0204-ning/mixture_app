import './CSS/Nav.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from "react"

// 定义界面中导航栏的部分
function Navigation() {

    const register_navigate = useNavigate();
    const currentLocation = useLocation();

    // 实现导航栏选中状态
    const [activeLink, setActiveLink] = useState(currentLocation.path)

    function handleLinkClick(path) {
        setActiveLink(path);
    }

    return (
        <nav id='Nav_frame'>
            <img id='Nav_logo' alt='website Logo' src={require('./Picture/bjyx.jpg')} />

            <ul id='nav_items'>
                <li><Link
                    to="/"
                    className={activeLink === '/' ? 'active-link' : ''}
                    onClick={() => handleLinkClick('/')}
                >首页</Link></li>

                <li> | </li>

                <li><Link
                    to="/conclusion"
                    className={activeLink === '/conclusion' ? 'active-link' : ''}
                    onClick={() => handleLinkClick('/conclusion')}
                >知识总结</Link></li>

                <li> | </li>

                <li><Link
                    to="/resume_produce"
                    className={activeLink === '/resume_produce' ? 'active-link' : ''}
                    onClick={() => handleLinkClick('/resume_produce')}
                >简历生成</Link></li>

                <li> | </li>

                <li><Link
                    to="/download_app"
                    className={activeLink === '/download_app' ? 'active-link' : ''}
                    onClick={() => handleLinkClick('/download_app')}
                >程序下载</Link></li>

                <li> | </li>
                <li><Link
                    to="/chat_something"
                    className={activeLink === '/chat_something' ? 'active-link' : ''}
                    onClick={() => handleLinkClick('/chat_something')}
                >闲聊</Link></li>
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