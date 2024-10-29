import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main style={ {padding: "1.5rem"}}>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </main>
    );
}

export default NotFound;