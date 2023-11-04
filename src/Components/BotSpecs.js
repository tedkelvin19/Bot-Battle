import { FaHeartbeat } from "react-icons/fa"
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs" 
import { Link, useNavigate } from "react-router-dom"   
import { useParams } from "react-router-dom"

function BotSpecs({ botArmy, Bots, setBotArmy}) {
    const navigate = useNavigate();

    const { currentBotId } = useParams();

    const currentBot = Bots.find((oneBot) => {
        return oneBot.id === parseInt(currentBotId)
    })

    const { name, catchphrase, avatar_url, bot_class , health, damage, armor } = currentBot;

    
    const handleEnlistBtnClick = (botId) => {
        botId = parseInt(botId)
        const clickedBot = Bots.find((bot) => {
            return bot.id === botId
        })

        const clickedBotIsInArmy = botArmy.some((bot) => {
            return bot.id === botId
        })
        if (!clickedBotIsInArmy) {
           setBotArmy([...botArmy, clickedBot])
        }
        navigate('/')
    }

    return (
        <div className="card h-90">

            <div className="card-main-details d-flex justify-content-center">
                <div className="left-details-part">
                    <img src={avatar_url} className="card-img-top" alt="..."/>
                </div>

                <div className="right-details-part text-left">
                    <h4>Name: {name}</h4>
                    <div className="card-body">
                        <h5 className="card-title">Catchphrase</h5>
                        <p className="card-text">{catchphrase}</p>
                    </div>
                    <h5 className="card-title">Class: {bot_class}</h5>
                    <div className="card-footer">
                        <FaHeartbeat/> {health} <BsFillLightningFill/> {damage} <BsShieldShaded /> {armor}
                    </div>
                    <Link to="/" className="btnGoBack d-block my-3 w-100">Go Back</Link>
                    <button onClick={() => { handleEnlistBtnClick(currentBotId) }} className="btnEnlist d-block mb-4 w-100">Enlist</button>
                </div>
            </div>
        </div>

    )
}

export default BotSpecs;