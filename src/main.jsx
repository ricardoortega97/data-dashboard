import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './components/NavBar.jsx'
import DetailView from './routes/DetailView.jsx'
import NotFound from './routes/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="stockDetail/:ticker" element={<DetailView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
</BrowserRouter>
)
