import {Card,Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {useEffect, useState} from 'react';
import {API} from './global.js';

function MovieCard({startNum,endNum}){

  let[movieList,setMovieList] = useState([]);

  let refreshMovieList = () => {
    fetch(`${API}/getMovies`)
    .then((data) => data.json())
    .then((mvs) => setMovieList(mvs))
    .catch(error => console.log(error));
  }

 useEffect(refreshMovieList);

 let slicedList = movieList.slice(startNum,endNum);

let history = useHistory();

let movieDetails = slicedList.map((obj,index) => {
    return <Card key={index}>
    <Card.Img variant="top" src={obj.src} alt={obj.name} className="card-img"/>
    <Card.Body className="d-flex">
      <Card.Title>{obj.name}</Card.Title>
      <Card.Text>{obj.language} | {obj.censor}</Card.Text>
      <Button variant="warning" className="book-button" onClick={() => history.push(`/book/${obj._id}`)}>Book</Button>
    </Card.Body>
  </Card> 
})
return movieDetails;
}

export default MovieCard;