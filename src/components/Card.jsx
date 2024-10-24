import Event from "./Event";
const Card = () => {
    return (
        <>
            <Event 
            top="Stocks"
            bottom="Buy low, sell high"
            /> 
            <Event 
                top="Crypto"
                bottom="Buy high, sell low"
            />
            <Event 
                top="Bonds"
                bottom="Buy high, sell high" 
            />
        </>
    )
}


export default Card;