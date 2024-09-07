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

        // if (isInstagram) {
        //     if (/iPad|iPhone|iPod/.test(ua)) {
        //         window.location.href = safariLink;
        //         return;
        //     // } else if (/android/i.test(userAgent)) {
        //     //     window.location.href = "https://onlyfans.com";
        //     //     return;
        //     // } else {
        //     //     window.location.href = link;
        //     //     return;
        //     // }
        // } else {
        //     window.location.href = link;
        //     return;
        // }

        if (/iPad|iPhone|iPod/.test(userAgent)) {
            window.location.href = safariLink;
            return;
        } else {
            const link = document.createElement("a");
            link.href = "/path-to-your-file.pdf"; // Adjust this to your file path
            link.download = "blablabla.pdf"; // Adjust the filename as needed
            document.body.appendChild(link); // Append to the body to make it a valid element
            link.click(); // Simulate a click to start downloading the file
            document.body.removeChild(link); // Clean up the DOM after the click

            // Redirect after download
            window.location.href = "https://onlyfans.com"; // Adjust the URL as needed
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
