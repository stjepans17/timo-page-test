import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // const [deviceType, setDeviceType] = useState('PC');

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const link = "https://www.youtube.com/";
        const safariLink = `x-web-search://?${link}`;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                userAgent
            )
        ) {
            window.location.href = safariLink;
        } else {
            window.location.href = link;
        }
    }, []);
    return (
        <>
            <div className="main"></div>
        </>
    );
}

export default App;
