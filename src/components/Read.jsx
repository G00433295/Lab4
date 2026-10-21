import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";
const Read = () => {
  const [myMovies, setMovie] = useState([]);

  useEffect(() => {
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
      .then((response) => {
        console.log(response.data.myArray);
        setMovie(response.data.myArray);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies movies={myMovies} />
    </div>
  );
}

export default Read;