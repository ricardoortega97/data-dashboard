import '../List.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockInfo = ({tickers}) => {

    const truncateName = (name, maxLength = 30) => {
        return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
    };
    
    return (
        <div>
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
                    {/* <tr>
                        <td>{ticker}</td>
                        <td>{name}</td>
                        <td>{date}</td>
                        <td>{market}</td>
                    </tr> */}
                        {tickers && Object.entries(tickers.results).map(([stock]) => (
                            <tr key={tickers.results[stock].name}>
                                <td>{tickers.results[stock].ticker}</td>
                                <td>{truncateName(tickers.results[stock].name)}</td>
                                <td>{new Date(tickers.results[stock].last_updated_utc)
                                    .toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</td>
                                <td>{tickers.results[stock].market}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StockInfo;
