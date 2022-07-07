import { useState } from 'react';
import Wood from './wood';

const House = () => {
  const [houseCount, setHouseCount] = useState(0)
    return ( 
      <>
        <img 
        src="/house.png" 
        alt="house" 
        className='house-img'
        style={{ width: "100px", height: "100px" }}/>
      </>
    );
}

export default House;