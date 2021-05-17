import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import GalleryItem from './components/GalleryItem'
function App() {
  const [photos, setphotos] = useState([])
  const [inputLimit, setImputLimit] = useState(3)
  const [limit, setLimit] = useState(inputLimit)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res =>{
      setphotos(res.data)
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
 function OnSubmitFun(e){
   e.preventDefault();
   setLimit(inputLimit);
 }
  return (
    <div className="App">
      <h2>Phot Album</h2>
      <form onSubmit={OnSubmitFun} className="pform">
        <span className="pbtn nmr-7">Showing {limit}/5000</span>
        <input type="number" className="pinput" placeholder="Showing 3 Images" onChange={(e)=>setImputLimit(e.target.value)}/>
        <input type="submit" value="Ok" className="pbtn"/>
      </form>
     <section className="gallery">
        {
          photos.slice(0, limit).map((photo)=>(
            <GalleryItem key={photo["id"]} pdata ={photo} />
          ))
        }
     </section>
    </div>
  );
}

export default App;
