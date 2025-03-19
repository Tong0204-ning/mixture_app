import Captcha from "react-captcha-code"; // 引入验证码组件
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Register() {
    const loginIn_navigation = useNavigate();
    const [inputCaptchaCode, setInputCaptchaCode] = useState(""); // 用户输入的验证码
    const [generateCaptcha, setGenerateCaptcha] = useState(""); // 生成的验证码

    // 生成验证码
    const handleCaptcha = (code) => {
        setGenerateCaptcha(code);
    };

    // 校验验证码
    const handleRegister = () => {
        if (inputCaptchaCode !== generateCaptcha) {
            alert("验证码错误！");
            return;
        }
        alert("验证码正确，注册成功！");
        loginIn_navigation("/");
    };


    return (
        <>
            <div>
                <Captcha charNum={5} onChange={handleCaptcha} />
                <input
                    type="text"
                    placeholder="输入验证码"
                    onChange={(e) => setInputCaptchaCode(e.target.value)}
                />
            </div>

            <button onClick={handleRegister}>注册</button>
        </>
    )
}

export default Register;