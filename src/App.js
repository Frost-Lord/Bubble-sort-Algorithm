import './App.css';
import { useEffect, useState } from "react";

function App() {

  async function bblsort(arr) {
    var i, j, temp;
    for (i = 0; i < arr.length; i++) {
      for (j = 0; j < (arr.length - i - 1); j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
  }

  function generateRandomArray() {
    var arr = [];
    var size = Math.floor(Math.random() * 30) + 10;
    for (var i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 1000) + 1);
    }
    return arr;
  }


  var arr = generateRandomArray();

  const UnSortedArray = arr.map((number) =>
      <li>{number}</li>
   );

  bblsort(arr);

   const SortedArray = arr.map((number) =>
   <li>{number}</li>
 );





  return (
    <div className="App">
      <header className="App-header">

        <div className="topnav">
          <button onClick={bblsort}>Start</button>
          <button onClick={bblsort}>Stop Sort</button>
          <button onClick={bblsort}>Restart/re-gen</button>
        </div>

        <div className='main-div'>
      <div className='bg-dark text-light text-center'>
        <h1 className='display-3 text-light my-3'>Unsorted Array</h1>
        <ul>
          {UnSortedArray}
        </ul>
      </div>
      <div className='bg-primary text-light text-center'>
        <h1 className='display-3 text-light my-3'>Sorted Array Using Bubble Sort</h1>
        <ul>
          {SortedArray}
        </ul>
      </div>


    </div>



      </header>
    </div>
  );
}

export default App;
