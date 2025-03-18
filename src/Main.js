import './CSS/main.css'
import { Route, Routes } from 'react-router-dom';
import Conclusion from "./conclusion/main_conclusion";
import Resume from './resume/main_resume';
import Download from './download/main_download';
import Chat from './chat/main_chat';

function Main() {
    return (
        <main id="Main_content">
            <Routes>
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/resume_produce" element={<Resume />} />
                <Route path="/download_app" element={<Download />} />
                <Route path="/chat_something" element={<Chat />} />
            </Routes>
        </main>
    )
}
export default Main