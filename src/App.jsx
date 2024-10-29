import { useRoutes } from 'react-router-dom';
import Home from './routes/Home';
import DetailView from './routes/DetailView';
import './App.css';

function App() {
    
    let element = useRoutes( [
        {
            path: '/',
            element: <Home />
        },
        {
            path: "/stockDetail/:ticker",
            element: <DetailView />
        },

    ]);


    return (
        <div>
            {element}
        </div>
    );

}

export default App;
