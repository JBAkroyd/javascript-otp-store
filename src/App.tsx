import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    const [url, setUrl] = useState<string | undefined>('');
    const [greeting, setGreeting] = useState<string | undefined>('');

    /**
     * Get current URL
     */
    useEffect(() => {
        const queryInfo = {active: true, lastFocusedWindow: true};

        chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
            const url = tabs[0].url;
            setUrl(url);
        });
    }, []);

    function sendTestMessage() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            foreach
            let port = chrome.tabs.connect(tabs[0].id || 0, {name: "knockknock"});
            port.postMessage({joke: "Knock knock"});
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>URL:</p>
                <p>
                    {url}
                </p>
                <button onClick={sendTestMessage}>SEND MESSAGE</button>
                <p>Response from content:</p>
                <p>{greeting}</p>
            </header>
        </div>
    );
}
export default App;