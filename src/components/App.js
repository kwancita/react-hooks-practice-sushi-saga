import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const containerSize = 4
const startBudget = 100

function App() {

  const [allSushi, setSushi] = useState([])
  const [sushiStart, setSushiStart] = useState(0)
  const [budget, setBudget] = useState(startBudget)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushi(data))
  },[])

  function showMore(){
    setSushiStart(sushiStart+containerSize)
  }

  function eatSushi(piece){

    if(piece.eaten || budget - piece.price < 0){
      return;
    }

    setBudget(budget - piece.price)

    setSushi(
      allSushi.map(sushi => sushi.id === piece.id? {...piece, eaten: true} : sushi)
    )
  }

  return (
    <div className="app">
      <SushiContainer eatSushi={eatSushi} showMore={showMore} sushis={allSushi.slice(sushiStart,sushiStart+containerSize)}/>
      <Table budget={budget} plates = {allSushi.filter(piece => piece.eaten)}/>
    </div>
  );
}

export default App;
