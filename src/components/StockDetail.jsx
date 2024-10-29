import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const StockDetail = () => {

    let params = useParams();

    const [fullDetail, setFullDetail] = useState(null);

    useEffect(() => {
        const getStockDetail = async () => {
            const response = await fetch(`https://api.polygon.io/v3/reference/tickers/${params.ticker}?apiKey=` +
                API_KEY);   
            const detailsJson = await response.json();
        
            console.log('Stock Detail:', detailsJson.results);
            setFullDetail({"info":detailsJson.results});
        };
        getStockDetail().catch(console.error);

    }, [params.ticker]);

    return (
        <div>
            {fullDetail && (
                <>
                    <h1>{fullDetail.info.name}</h1>
                    <img src={`${fullDetail.info.branding.logo_url}`}
                        alt={`Small Icon for ${params.ticker}`} className="images" />
                    <div>{fullDetail.info.description}</div>
                    <br></br>

                    <h2>Market Details</h2> 

                    <table>
                        <tbody> 
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
                </>
                

            )}
        </div>
    )
};
export default StockDetail;