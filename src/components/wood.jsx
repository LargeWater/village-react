import { useState } from 'react';

const Wood = () => {
  const [woodCount, setWoodCount] = useState(0)
  function handleClick() {
    setWoodCount(woodCount + 1)
  }
  return ( 
    <>
    <button onClick={handleClick}>
      Chop Wood
      </button>
      <h3>
        <img 
        src='/logs.png' 
        alt='wood'
        style={{ width: "100px", height: "100px" }}/>
        = {woodCount}
  
      </h3>
    </>
  );
}

export default Wood
