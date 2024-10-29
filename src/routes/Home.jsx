import NavBar from '../components/NavBar';
import Card from '../components/Card';
import StockInfo from '../components/StockInfo';
import { useEffect, useState } from 'react';
import DetailView from './DetailView';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Home = () => {

    const [tickers, setTickers] = useState(null); 
    const [filteredMarket, setFilteredMarket] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedMarket, setSelectedMarket] = useState('');

    const marketTypes = ['stocks', 'crypto', 'fx', ''];

      // Fetch all tickers with a limit of 25
        const fetchTickers = async () => {

        let url =  `https://api.polygon.io/v3/reference/tickers?limit=100&apiKey=${API_KEY}`;

        if (selectedMarket) {
            url += `&market=${selectedMarket}`; // Include market type
        }
        const response = await fetch(url);
        const json = await response.json();
        console.log('Ticker Data Response:', json);
        setTickers(json);
    };

    //Filter by market with search input
    const searchItems = (value) => {
        setSearchInput(value);
        if (tickers) {
            const filtered = Object.entries(tickers.results).filter(([_, stock]) => 
                stock.market.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredMarket(filtered);
        }
    };

    useEffect(() => {
        fetchTickers().catch(console.error);
    }, [selectedMarket]);

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
                            <label htmlFor="market-search" className="input-label">
                                Market:
                            </label>
                            <input 
                                id="market-search"
                                type="text" 
                                placeholder="Search by Market" 
                                value={searchInput} 
                                onChange={(e) => searchItems(e.target.value)} 
                            />
                            <select value={selectedMarket} onChange={(e) => setSelectedMarket(e.target.value)}>
                                {marketTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ticker</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Market</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(searchInput.length > 0 ? filteredMarket 
                                : tickers?.results ? Object.entries(tickers.results) : []).map(([_, stock]) => 
                                    <StockInfo 
                                        key={stock.ticker} // Ensure unique key
                                        name={stock.name}
                                        ticker={stock.ticker}
                                        date={stock.last_updated_utc}
                                        market={stock.market}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>   
    );

}

export default Home;