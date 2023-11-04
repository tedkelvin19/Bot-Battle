import {useNavigate} from "react-router-dom"

function BotCollection({Bots,displayBots}){
    const navigate = useNavigate();
    const handleBotClick = (botId) => {
        navigate(`/${botId}`)
    }

    return (
        <div>
            <h1>Bots Collection</h1>
            <div className="row row-cols-1 row-cols-md-4 g-3">
                {displayBots(Bots,handleBotClick)}
            </div>
        </div>
    )
}
export default BotCollection;