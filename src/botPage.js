import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotCard from './Components/BotCard';
import BotSpecs from './Components/BotSpecs';
import SortBar from './Components/SortBar';

function BotPage() {
  const [Bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((res) => res.json())
      .then((botData) => {
        setBots(botData);
      });
  }, []);

  const displayBots = (bots, handleBotClick) => {
    return bots.map((bot) => (
      <BotCard
        key={bot.id}
        bot={bot}
        Bots={Bots}
        botArmy={botArmy}
        setBotArmy={setBotArmy}
        handleBotClick={handleBotClick}
        setBots={setBots}
      />
    ));
  };

  const sortBotsByHealth = () => {
    const sortedBots = [...Bots].sort((a, b) => b.health - a.health);
    setBots(sortedBots);
  };

  const sortBotsByDamage = () => {
    const sortedBots = [...Bots].sort((a, b) => b.damage - a.damage);
    setBots(sortedBots);
  };

  const sortBotsByArmor = () => {
    const sortedBots = [...Bots].sort((a, b) => b.armor - a.armor);
    setBots(sortedBots);
  };

  return (
    <BrowserRouter>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />
      <SortBar onSortByHealth={sortBotsByHealth} onSortByDamage={sortBotsByDamage} onSortByArmor={sortBotsByArmor} />
      <Routes>
        <Route
          path="/"
          element={<BotCollection Bots={Bots} botArmy={botArmy} setBotArmy={setBotArmy} displayBots={displayBots} />}
        />
        <Route path="/:currentBotId" element={<BotSpecs Bots={Bots} botArmy={botArmy} setBotArmy={setBotArmy} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default BotPage;