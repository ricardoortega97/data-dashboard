import Event from "./Event";
const Card = () => {
    return (
        <>
            <Event 
            top="Stocks"
            bottom="High risk, high reward"
            /> 
            <Event 
                top="Crypto"
                bottom="Substantial Gains"
            />
            <Event 
                top="Bonds"
                bottom="Steady Growth" 
            />
        </>
    )
}


export default Card;