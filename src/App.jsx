import { useRoutes } from 'react-router-dom';
import Home from './routes/Home';
import DetailView from './routes/DetailView';
import NavBar from './components/NavBar';
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
        <>
            {element}
        </>
    );

}

export default App;
