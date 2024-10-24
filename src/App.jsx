import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import StockInfo from './components/StockInfo';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [tickers, setTickers] = useState(null); 
    const [filteredMarket, setFilteredMarket] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // Fetch all tickers with a limit of 25
    const fetchTickers = async () => {
        const response = await fetch(
            `https://api.polygon.io/v3/reference/tickers?limit=25&apiKey=${API_KEY}`
        );
        const json = await response.json();
        console.log('Ticker Data Response:', json);
        setTickers(json);
    };
//Filter by market with search input
    const searchItems = (value) => {
        setSearchInput(value);
        if (market === '') {
            const filteredMarket = Object.keys(tickers.results).filter((item) => 
                Object.values(item)
            .join("")
            .toLowerCase()
            .includes(value.toLowerCase())
            );
            setFilteredMarket(filteredMarket);
        } else {
            setFilteredMarket(Object.keys(tickers.results));
        }   
    };  

    useEffect(() => {
        fetchTickers().catch(console.error);
    }, []);

    return (   
        <div className="app">

            <div className="sidebar">
                <div className="header">
                    <h1>Stock Info</h1>
                </div>
                <NavBar />
            </div>
            <div className="app-page">
                <div className="app-row">
                    <Card />
                </div>
                <div className="app-row">
                    <div className="list">
                        <div className="filters">
                            <input 
                                type="text" 
                                placeholder="Search by Market" 
                                value={searchInput} 
                                onChange={(e) => searchItems(e.target.value)} 
                            />
                        </div>
                        <StockInfo tickers={tickers} />
                    </div>
                </div>
            </div>

        </div>   
    );
}

export default App;
