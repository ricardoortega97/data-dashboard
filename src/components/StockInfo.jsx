import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockInfo = ({ ticker, name, date, market}) => {
    const [stock, setStock] = useState(null);

    

    useEffect(() => {
    }, [stock]);

    return (
        <></>
    );
};

export default StockInfo;
