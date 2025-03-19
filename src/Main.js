import './CSS/main.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Home';
import Conclusion from './Conclusion/main_conclusion';
import Resume from './Resume/main_resume';
import Download from './Download/main_download';
import Chat from './Chat/main_chat';
import Register from './Register/main_register'

function Main() {

    return (
        <main id="Main_content">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/resume_produce" element={<Resume />} />
                <Route path="/download_app" element={<Download />} />
                <Route path="/chat_something" element={<Chat />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </main>
    )
}
export default Main