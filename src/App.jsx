import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // const [deviceType, setDeviceType] = useState('PC');

    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor;
        const isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
        const userAgent = navigator.userAgent;
        const link = "https://www.onlyfans.com/";
        const safariLink = `x-web-search://?${link}`;

        if (isInstagram) {
            if (/iPad|iPhone|iPod/.test(ua)) {
                window.location.href = safariLink;
                return;
            } else if (/android/i.test(userAgent)) {
                window.location.href = "intent:https://onlyfans.com#Intent;end";
                return;
            } else {
                window.location.href = link;
                return;
            }
        } else {
            window.location.href = link;
            return;
        }
    }, []);
    return (
        <>
            <div className="main-div"></div>
        </>
    );
}

export default App;
