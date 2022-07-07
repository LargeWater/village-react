import { useState } from 'react';

const Villager = () => {
  const [villagerCount, setVillagerCount] = useState(1)
  return ( 
    <>
      <h3>Villager count: {villagerCount}</h3>
    </>
  );
}

export default Villager;