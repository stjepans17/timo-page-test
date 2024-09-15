import { useEffect, useState } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const ua = navigator.userAgent || navigator.vendor;
        const isInstagram = ua.indexOf("Instagram") > -1 ? true : false;
        const userAgent = navigator.userAgent;
        const link = "https://onlyfans.com/kathrynn";
        const safariLink = `x-web-search://?${link}`;

        if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = safariLink;
            return;
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
