import { useState } from 'react';
import Wood from './wood';


const House = () => {
  const [houseCount, setHouseCount] = useState(0)
  function handleClick() {
    if((Wood.woodCount - 25) >= 0) {
    setHouseCount(houseCount + 1)
    Wood.setWoodCount(Wood.woodCount - 25)
  }
  }
    return ( 
      <>
        <button onClick={handleClick}>
      Build House
      </button>
      <br />
        <img 
        src="/house.png" 
        alt="house" 
        className='house-img'
        style={{ width: "100px", height: "100px" }}/>
        = {houseCount}
      </>
    );
}

export default House;