import "./CSS/Home.css";
import { useState, useEffect } from "react";

function Homepage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 700);

    // 监听窗口大小变化，useEffect 处理组件副作用，如事件监听、数据请求等
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 700);  // 根据视口宽度更新 isLargeScreen 状态
        };

        window.addEventListener("resize", handleResize);  // 监听窗口 resize 事件，动态调整布局
        return () => window.removeEventListener("resize", handleResize);  // 组件卸载时移除监听，防止内存泄漏
    }, []);  // 仅在组件挂载时运行一次


    return (
        <div id="homepage_main_content">
            <div
                id="website_intro"
                style={{
                    display: "grid",
                    gridTemplateColumns: isLargeScreen ? "repeat(2, 1fr)" : "1fr",
                }}
            >
                <div>1</div>
                <div>2</div>
            </div>

            <div id="knowledge_conclusion_intro">
                knowledge conclusion
            </div>

            <div id="resume_produce_intro">
                make resume automatically
            </div>

            <div id="app_develop_intro">
                develop App
            </div>

            <div id="chat_section_intro">
                Funny story
            </div>

            <div id="travel_album_intro">
                My album
            </div>
        </div>
    );
}

export default Homepage;
