function YourBotArmy({ botArmy, setBotArmy, displayBots }) {

    const handleBotArmyClick = (botId) => {

        const updatedBotArmy = botArmy.filter((bot) => {
            return bot.id !== botId
        })

        setBotArmy(updatedBotArmy);
    }
    return (
        <div className="p-10">
            <h1>Bot Army</h1>
            <div className="row row-cols-1 row-cols-md-5 g-3 m-1 my-4 pb-3 h-100 px-3 bot-army">
                {displayBots(botArmy, handleBotArmyClick)}
            </div>
        </div>
    )
}

export default YourBotArmy