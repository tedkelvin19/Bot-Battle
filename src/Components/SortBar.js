import React from 'react';

const SortBar = ({ onSortByHealth, onSortByDamage, onSortByArmor }) => {
  return (
    <div className="sort-bar">
      <button onClick={onSortByHealth}>Sort by Health</button>

      <button onClick={onSortByDamage}>Sort by Damage</button>

      <button onClick={onSortByArmor}>Sort by Armor</button>
    </div>
  );
};

export default SortBar;