import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { useState, useEffect } from 'react';
import { getDocs, collection, addDoc } from 'firebase/firestore';
function App() {
  const [movieList, setMovieList] = useState([]);
  const [newTitle, setNewTitle] = useState('')
  const [newReleaseDate, setNewReleaseDate] = useState(0)
  const [newDirector, setNewDirector] = useState('')
  const [newOscarWinner, setNewOscarWinner] = useState(false)

  const moviesCollectionRef = collection(db, "movies")

  const getMovieList = async () => {
    try {
    const data = await getDocs(moviesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    setMovieList(filteredData)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=> {
    getMovieList();
  }, [])

  const onSubmitMovie = async () => {

    try {await addDoc(moviesCollectionRef, {
      title: newTitle, 
      year: newReleaseDate, 
      director: newDirector, 
      oscarWinner: newOscarWinner
    });

    getMovieList();
      
     } catch(err) {
    console.error(err)
  }}


  return (
    <div className="App">
      <Auth/>
      <div>
        <input placeholder='Movie title:' onChange={(e) => setNewTitle(e.target.value)}/>
        <input placeholder='Director:' onChange={(e) => setNewDirector(e.target.value)}/>
        <input placeholder='Release date:' type="number" onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
        <input placeholder='Oscar winner?' type="checkbox" checked={newOscarWinner} onChange={(e) => setNewOscarWinner(e.target.checked)} />
        <label>Oscar winner?</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{color : movie.oscarWinner ? "gold" : "red" }}>{movie.title}</h1>
            <p>{movie.year}</p>
            <p>Directed by {movie.director}</p>
          </div>
        )

        )}
      </div>
    </div>
  );
}

export default App;
