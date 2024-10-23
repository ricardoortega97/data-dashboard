import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [tickers, setTickers] = useState(null); 
    const [date] = useState('2024-10-15'); 

    // Fetch all tickers with a limit of 25
    const fetchTickers = async () => {
        const response = await fetch(
            `https://api.polygon.io/v3/reference/tickers?limit=25&apiKey=${API_KEY}`
        );
        const json = await response.json();
        console.log('Ticker Data Response:', json);
        setTickers(json);
    };

    useEffect(() => {
        fetchTickers().catch(console.error);
    }, []);

    return (   
        <div className="whole-page">

            <div className="sidebar">
                <div className="header">
                    <h1>Stock Information</h1>
                </div>
                <NavBar />
            </div>
            <div className="app-page">
                <div className="app-row">
                    <Card />
                </div>
                <div className="app-row">
                    <h1>Stock list</h1>
                    <ul>
                        {tickers && Object.entries(tickers.results).map(([stock]) =>
                            <li key={tickers.results[stock].name}>
                                {tickers.results[stock].name}
                            </li>
                        ) 
                        }
                    </ul>
                </div>
            </div>

        </div>   
    );
}

export default App;
