
import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue]=useState("")
  const [results,setResults] =useState([])
  // 3tVrmbt5tjA4jQF8zFLusl8X1NZaSSqzluXq2ZAZOv0 
  const fetchImages= ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=ZF3QqwDjrpSdqzsusoWWLtb3Plba-_T8eehic9R05c4&query=${value}&orientation=landscape `)
  .then(res=>res.json())
  .then(data=>{
    // console.log(data)
    setResults(data.results)
  })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span id="gg">Geek Gallery</span>
        <input style={{width:"30%"}} type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button id="btn" onClick={()=>fetchImages()}>Search</button>

      </div>
      <div className='gallery'>
        {
          results.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular} />
          })
        }

      </div>
    </div>
  );
}

export default App;