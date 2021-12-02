import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, showMore, eatSushi}) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushis.map(sushi => (   
      <Sushi 
        key={sushi.id} 
        sushi={sushi}
        eatSushi ={eatSushi}
      />))} 
      <MoreButton handleClick = {showMore}/>
    </div>
  );
}

export default SushiContainer;
