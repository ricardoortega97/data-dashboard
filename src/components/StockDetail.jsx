import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StockChart from "./StockChart";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockDetail = () => {

    let params = useParams();

    const [fullDetail, setFullDetail] = useState(null);
    const [logo, setLogo] = useState(null);

    useEffect(() => {
        const getStockDetail = async () => {
            const response = await fetch(`https://api.polygon.io/v3/reference/tickers/${params.ticker}?apiKey=` +
                API_KEY);   
            const detailsJson = await response.json();
        
            console.log('Stock Detail:', detailsJson.results);
            setFullDetail({"info":detailsJson.results});

            if (detailsJson.results?.branding?.logo_url) {
                await getLogo(detailsJson.results.branding.logo_url);
            }
        };

        const getLogo = async (logo) => {
            try {
                const response = await fetch(logo, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`,
                    }
                });
            if (!response.ok) {
                throw new Error('Failed to get Logo');
            }
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setLogo(url);
            } catch (error) {
                console.error(error);
            }
        }
        getStockDetail().catch(console.error);  
    }, [params.ticker]);

    return (
        <div className="ticker-table">
            {fullDetail && (
                <>
                    <h1>{fullDetail.info.name}</h1>
                    <img src={`${logo}`}
                        alt={`Small Icon for ${params.ticker}`}
                        className="images" 
                        />
                    <div>{fullDetail.info.description}</div>
                    <br></br>

                    <h2>Market Details</h2> 

                    <table className="inner-table">
                        <tbody > 
                            <tr>
                                <th>Launch Date </th>
                                <td>{fullDetail.info.list_date}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{fullDetail.info.locale}</td>
                            </tr>
                            <tr>
                                <th>Website </th>
                                <td>{fullDetail.info.homepage_url}</td>
                            </tr>
                            <tr>
                                <th>Market</th>
                                <td>{fullDetail.info.market}</td>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <td>{fullDetail.info.type}</td>
                            </tr>
                            <tr>
                                <th>Currency</th>
                                <td>{fullDetail.info.currency_name}</td>
                            </tr>
                            <tr>
                                <th>Primary Exchange</th>
                                <td>{fullDetail.info.primary_exchange}</td>
                            </tr>
                            <tr>
                                <th>Total Employees</th>
                                <td>{fullDetail.info.total_employees}</td>
                            </tr>
                            <tr>
                                <th>Market Cap</th>
                                <td>${fullDetail.info.market_cap}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{fullDetail.info.address.address1} {fullDetail.info.address.city}, {fullDetail.info.address.state}</td>
                            </tr>
                        </tbody>
                    </table>
                    <StockChart ticker={params.ticker} />
                </>
                

            )}
        </div>
    )
};
export default StockDetail;