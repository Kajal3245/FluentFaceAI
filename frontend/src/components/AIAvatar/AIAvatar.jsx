import { useEffect, useState } from "react";
import "./AIAvatar.css";

function AIAvatar({ state = "idle", speaking = false }) {

    const [mouthOpen, setMouthOpen] = useState(false);

    useEffect(() => {

        let interval;

        if (speaking) {

            interval = setInterval(() => {
                setMouthOpen(prev => !prev);
            }, 180);

        } else {

            setMouthOpen(false);

        }

        return () => clearInterval(interval);

    }, [speaking]);

    const avatarImage = mouthOpen
        ? "/images/abhishek_open.png"
        : "/images/abhishek_closed.png";

    return (
        <div className={`avatar-wrapper ${state}`}>

            <img
                src={avatarImage}
                alt="Abhishek AI"
                className="avatar-image"
            />

            <div className="avatar-status">

                {state === "idle" && "😊 Ready"}

                {state === "listening" && "🎤 Listening..."}

                {state === "thinking" && "🤖 Thinking..."}

                {state === "speaking" && "🗣 Abhishek Speaking..."}

            </div>

        </div>
    );
}

export default AIAvatar;