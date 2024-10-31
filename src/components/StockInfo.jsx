import '../List.css';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockInfo = ({ name, ticker, date, market }) => {
    const truncateName = (name, maxLength = 50) => {
        return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
    };
    
    return (
        <tr key={ticker}> {/* Ensure unique key for each row */}
            <td>
                <Link
                style={{color: 'black'}}
                to={`/StockDetail/${ticker}`}
                key={ticker}
                >
                    {truncateName(name)}
                </Link>    
            </td>
            <td>{ticker}</td>
            <td>{new Date(date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</td>
            <td>{market}</td>
        </tr>
    );
};

export default StockInfo;
