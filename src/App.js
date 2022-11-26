import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [array, setArray] = useState([]);

  let sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const finishedAnimation = async () => {
    for (let i = 0; i < array.length; i++) {
      let bar = document.getElementById(i).style
      bar.backgroundColor = 'green'
      await sleep(50)
    }
  }

  const bblsort = async () => {
    let currentArray = array;
    let sorted = false

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArray.length - 1; i++) {
        for (let j = 0; j < currentArray.length - i - 1; j++) {
          if (currentArray[j].value > currentArray[j + 1].value) {

            let temp = currentArray[j]
            currentArray[j] = currentArray[j + 1]
            currentArray[j + 1] = temp

            setArray([...array, currentArray])
            

            console.log("sorting")

            let bar1 = document.getElementById(i).style
            let bar2 = document.getElementById(j).style


            bar1.backgroundColor = 'red'
            bar2.backgroundColor = 'green'

            await sleep(50)

            bar1.backgroundColor = '#FF7F50'
            bar2.backgroundColor = '#FF7F50'

            sorted = false;
          }

        }
      }
    }
    if (sorted) {
      finishedAnimation()
    }

  }

  function generateRandomArray() {
    var arr = [];
    for (var i = 0; i < 20; i++) {
      arr.push({ id: i, value: Math.floor(Math.random() * 1000) + 1 });
    }
    return arr;
  }

  useEffect(() => {
    setArray(generateRandomArray());
  }, []);


  const unsorted = array.map((item) => (
    <div
      className='bars'
      id={item.id}
      key={item.value}
      style={{ height: item.value }}
    >{item.value}</div>
  ));

  return (
    <div className="App">
      <header className="App-header">

        <div className="topnav">
          <button onClick={() => bblsort()}>Start</button>
          <button onClick={bblsort}>Stop Sort</button>
          <button onClick={bblsort}>Restart/re-gen</button>
        </div>


        <div className='sortingBars'>
          {unsorted}
        </div>




      </header>
    </div>
  );
}

export default App;
