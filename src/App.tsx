import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
    const [url, setUrl] = useState<string | undefined>('');

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
            chrome.tabs.sendMessage(tabs[0].id as number, {greeting: "hello"}, function(response) {
                console.log(response.farewell);
            });
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
            </header>
        </div>
    );
}
export default App;