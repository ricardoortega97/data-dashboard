import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label,
    ResponsiveContainer
} from "recharts";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockChart = ({ticker}) => { 
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => { 
            const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2024-10-01/2024-10-30?adjusted=true&sort=asc&apiKey=${API_KEY}`);
            const json = await response.json();
            if (json && json.results) {
                const formattedData = json.results.map(dataPoint => ({
                    date: new Date(dataPoint.t).toLocaleDateString(),
                    price: dataPoint.c 
                }));
                setChartData(formattedData);
            }
        };
        fetchChartData().catch(console.error);
    }, [ticker]);

    return (
        <div>
            <h2>Stock Chart</h2>
            <div className="chart-container">
            {chartData && (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                    data={chartData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date">
                        <Label value="Date" position="insideBottom" />
                    </XAxis>
                    <YAxis>
                        <Label value="Price" position="insideLeft" angle={-90} />
                    </YAxis>
                    <Tooltip />
                </LineChart>
                </ResponsiveContainer>
            )} 
        </div>
        </div>
        );
};


export default StockChart;