import "./App.css";
import { Container, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-calendar/dist/Calendar.css";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Slider from "./Components/slider";
import { useState, useEffect } from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsMailbox2,
} from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import imgArr from "./Components/imageData.js";
import MovieCard from "./card.js";
import moviesList from "./MoviesList/moviePosters.js";
import {
  NavLink,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
import {API} from './global.js';

let intervalId;
let moviePerPage = 5;

function App() {
  return (
    <div className="App">
      <div>
        {/* navigation bar on top */}
        <Navbar bg="light" expand="sm">
          <Navbar.Brand href="#" className="brand-name">
            BookMv.com
          </Navbar.Brand>
          {/* navigation links collapse if screen width is less than large */}
          <Navbar.Toggle aria-controls="navigation-links"></Navbar.Toggle>
          <Navbar.Collapse
            id="navigation-links"
            className="justify-content-end"
          >
            <Nav>
              <NavLink to="/" className="login-link">
                Home
              </NavLink>
              <NavLink to="/movies" className="link1">
                Movies
              </NavLink>
              <NavLink to="/theatres" className="link2">
                Theatres
              </NavLink>
              <NavLink to="/login-signup" className="link3">
                Sign in
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route
            path="/movies">
           <Construction />
            </Route>

          <Route
            path="/theatres">
            <Construction />
          </Route>

          <Route path="/login-signup">
            <Signin />
          </Route>

          {/* <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <OffersSection />
                <BookingSection />
                <Footer />
              </div>
            )}
          ></Route> */}

          <Route exact path="/">
            <div>
              <OffersSection />
              <BookingSection />
              <Footer />
            </div>
          </Route>

          <Route path="/create-account">
            <CreateAccount />
          </Route>

          <Route path="/book/:id">
            <CompleteMovieDetailsAndBooking />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// function HeaderDiv(){
//   return(
//     <div>
//       {/* navigation bar on top */}
//       <Navbar bg="light" expand="sm">
//         <Navbar.Brand href="#" className="brand-name">BookMv.com</Navbar.Brand>
//         {/* navigation links collapse if screen width is less than large */}
//         <Navbar.Toggle aria-controls="navigation-links"></Navbar.Toggle>
//         <Navbar.Collapse id="navigation-links" className="justify-content-center">
//           <Nav>
//             {/* <Nav.Link href="#" className="link1">Home</Nav.Link>
//             <Nav.Link href="#" className="link2">Movies</Nav.Link>
//             <Nav.Link href="#" className="link3">Theatres</Nav.Link>
//             <Nav.Link href="#" className="login-link">Login/Sign Up</Nav.Link> */}

//             <NavLink to="/movies" className="link1">Movies</NavLink>
//             <NavLink to="/theatres" className="link2">Theatres</NavLink>
//             <NavLink to="/login-signup" className="link3">Login/Sign Up</NavLink>
//             <NavLink to="/" className="login-link">Home</NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Switch>
//           <Route path="/movies"render={props =>
//             <div>
//               <HeaderDiv />
//               <Footer />
//             </div>
//           } >
//           </Route>
//       </Switch>
//     </div>
//   )
// }

function OffersSection() {
  // setting slider index
  let [slide, setSlide] = useState(0);
  let posterLen = imgArr.length;

  useEffect(() => {
    intervalId = setInterval(() => {
      autoPlay();
    }, 10000);
    return () => clearInterval(intervalId);
  });

  function autoPlay() {
    console.log(`autoplay running`);
    if (slide === posterLen - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  return (
    <Container fluid className="d-flex gap-3">
      <div className="leftArrow d-flex">
        <BsFillArrowLeftSquareFill
          onClick={() => {
            slide > 0 ? setSlide(slide - 1) : setSlide(0);
          }}
          size={25}
          className="react-leftArrow"
        />
      </div>

      {/* movie posters slides in autoplay */}
      {/* takes the div carrying movie posters from Slider component in slider.js and set to slider-images */}
      <div className="slider-images">
        <Slider slideInd={slide} />
      </div>

      {/* offer section on the right end next to slides */}
      <div className="cashback-offer">
        <div className="offer-content justify-content-center">
          <div className="line1">
            <p className="text-wrap">Unlock exciting offers!!</p>
          </div>
          <div className="line2">
            <p className="text-wrap">Book Now</p>
          </div>
        </div>
      </div>

      <div className="rightArrow d-flex">
        <BsFillArrowRightSquareFill
          onClick={() => {
            slide < posterLen - 1
              ? setSlide(slide + 1)
              : setSlide(posterLen - 1);
          }}
          size={25}
          className="react-rightArrow"
        />
      </div>
    </Container>
  );
}

function BookingSection() {
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(moviePerPage);
  let movieArraySize = moviesList.length;
  return (
    <Container fluid className="booking-container">
      <hr></hr>
      <div className="movies-header">
        <span className="movies-span">Movies</span>
      </div>

      <div className="movie-list-section d-flex">
        <div className="leftArrow-booking-section d-flex">
          <BsFillArrowLeftSquareFill
            size={25}
            onClick={() => {
              if (start === 0) {
                setStart(0);
                setEnd(moviePerPage);
              } else {
                setStart(start - moviePerPage);
                setEnd(end - moviePerPage);
              }
            }}
          />
        </div>
        <Container className="current-movies d-flex flex-wrap">
          <MovieCard startNum={start} endNum={end} />
        </Container>

        <div className="rightArrow-booking-section d-flex">
          <BsFillArrowRightSquareFill
            size={25}
            onClick={() => {
              let remainder = movieArraySize % moviePerPage; //3
              let lastIteration = movieArraySize - remainder; //25

              if (start === lastIteration) {
                setStart(0);
                setEnd(moviePerPage);
              } else {
                setStart(start + moviePerPage);
                setEnd(end + moviePerPage);
              }
            }}
          />
        </div>
      </div>
    </Container>
  );
}

function Footer() {
  return (
    <Container fluid className="section-footer d-flex">
      <div className="foo-customer-support d-flex">
        <div>
          <RiCustomerService2Fill size={37} />
        </div>
        <p className="m-0">Customer Support</p>
      </div>
      <div className="foo-subscription d-flex">
        <div>
          <BsMailbox2 size={37} />
        </div>
        <p className="m-0">Subscribe to Newsletter</p>
      </div>
      <div className="foo-resend-confirmation d-flex">
        <div>
          <IoTicket size={37} />
        </div>
        <p className="m-0">Resend Booking Confirmation</p>
      </div>
    </Container>
  );
}

function Signin() {
  let [mailId, setMailId] = useState("");
  let [password, setPassword] = useState("");
  let [label, setLabel] = useState(false);
  let history = useHistory();

  return (
    <Container className="login-container">
      <div className="login-div d-flex justify-content-center">
        <Form className="login-form d-flex">
          <Form.Text id="login-text">Login</Form.Text>
          {label ? (
            <Form.Label className="sign-in-error">
              Invalid Credentials !!!
            </Form.Label>
          ) : (
            ""
          )}
          <Form.Control
            type="email"
            placeholder="email id"
            onChange={(event) => setMailId(event.target.value)}
          />
          <Form.Control
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            variant="warning"
            onClick={() => {
              const creds = {
                userName: mailId,
                loginPassword: password,
              };

              fetch(`${API}/login`, {
                method: "POST",
                body: JSON.stringify(creds),
                headers: { "content-type": "application/json; charset=UTF-8" },
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.authentication === "success") {
                    history.push("/");
                    setLabel(false);
                  } else {
                    history.push("/login-signup");
                    setLabel(true);
                  }
                })
                .catch((error) => console.log(error));
            }}
          >
            Login
          </Button>
          <div className="forgot-signup-links d-flex gap-4">
            <Link to="/forgot-password">Forgot Password?</Link>
            <span>
              Don't have an account?<Link to="/create-account">Sign Up</Link>
            </span>
          </div>
        </Form>
      </div>
    </Container>
  );
}

function CreateAccount() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [emailId, setEmailId] = useState("");
  let [password, setPassword] = useState("");
  // let[usersList,setUsersList] = useState([]);
  let [show, setShow] = useState(false);
  let [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      firstName: fname,
      lastName: lname,
      mobileNumber: mobileNumber,
      emailId: emailId,
      password: password,
    };

    fetch(`${API}/addUser`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.showModal) {
          setShow(data.showModal);
          setMsg("Account created successfully !!!");
          setFname("");
          setLname("");
          setMobileNumber("");
          setEmailId("");
          setPassword("");
        }
      })
      .catch((error) => console.log(`Error in inserting data ${error}`));
  };

  return (
    <Container className="signup-container">
      <div className="signup-div d-flex justify-content-center">
        <Form className="signup-form d-flex" onSubmit={handleSubmit}>
          <Form.Text id="signup-text">Sign Up</Form.Text>
          <Form.Control
            type="text"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Mobile number"
            id="mobile_number"
            name="mobile_number"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
          />
          <Form.Control
            type="email"
            placeholder="Email id"
            id="email_id"
            name="email_id"
            value={emailId}
            onChange={(event) => setEmailId(event.target.value)}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="warning" type="submit">
            Create Account
          </Button>
          <Button variant="danger" type="reset">
            Reset
          </Button>

          <Modal show={show}>
            <Modal.Body>
              <p>{msg}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button aria-label="Close" onClick={() => setShow(!show)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </div>
    </Container>
  );
}

function CompleteMovieDetailsAndBooking() {
  let getId = useParams();
  let id = getId.id;
  let [oneMovie, setOneMovie] = useState({});
  let [directorArr, setDirectorArr] = useState([]);
  let [musicArr, setMusicArr] = useState([]);
  let [actorsArr, setActorsArr] = useState([]);

  useEffect(() => {
    fetch(`${API}/movies/`+id)
      .then((response) => response.json())
      .then((data) => {
        setOneMovie(data);
        setDirectorArr(data.crew.director);
        setMusicArr(data.crew.music);
        setActorsArr(data.actors);
      });
  }, [id]);

  return (
    <Container fluid className="all-details-movie">
      <div className="poster-and-details d-flex">
        <div className="left-img">
          <img src={oneMovie.src} alt={oneMovie.src} />
        </div>

        <div className="right-details d-flex mt-5">
          <div className="movie-title">
            <p>
              {oneMovie.name} - {oneMovie.language} | {oneMovie.censor}
            </p>
          </div>

          <div>
            <p>Genre : {oneMovie.genre}</p>
          </div>
          <div>
            <p>Released : {oneMovie.release}</p>
          </div>
          <div>
            <p>Duration : {oneMovie.duration}</p>
          </div>

          <div className="my-2">
            Actors :{" "}
            {actorsArr.map((arr, index) => {
              if (index === actorsArr.length - 1) {
                return `${arr} `;
              } else {
                return `${arr} . `;
              }
            })}
          </div>

          <div className="my-2">
            Director(s) :{" "}
            {directorArr.map((arr, index) => {
              if (index === directorArr.length - 1) {
                return `${arr} `;
              } else {
                return `${arr} . `;
              }
            })}
          </div>

          <div className="my-2">
            Music :{" "}
            {musicArr.map((arr, index) => {
              if (index === musicArr.length - 1) {
                return `${arr} `;
              } else {
                return `${arr} . `;
              }
            })}
          </div>
        </div>
      </div>
      {/* poster and flex ends here */}

      <Container fluid className="theatres-date d-flex">
        <LocationAndDate />
      </Container>
    </Container>
  );
}

function LocationAndDate() {
  var date = new Date();
  var today = date.toISOString().split("T")[0];

  var lastDay = date.setDate(date.getDate() + 6);
  lastDay = date.toISOString().split("T")[0];

  let [cities, setCities] = useState([]);

  let [selectedCity, setSelectedCity] = useState("");
  let [selectedCityIndex, setSelectedCityIndex] = useState("");
  let [selectedDate, setSelectedDate] = useState("");
  let [showTheatre, setShowTheatre] = useState(false);

  let styles = { display: showTheatre ? "block" : "none" };

  function handleChange(event) {
    setSelectedCity(event.nativeEvent.target[event.target.selectedIndex].text);
    setSelectedCityIndex(event.target.value);
  }

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
  }

  useEffect(() => {
    fetch(`${API}/getCities`)
      .then((response) => response.json())
      .then((data) => setCities(data));
  });

  return (
    <div className="location-date d-flex gap-5">
      <div className="d-flex gap-5">
        <div className="location-section">
          <Form.Select
            aria-label="Default select example"
            value={selectedCityIndex}
            onChange={handleChange}
          >
            <option>Location</option>
            {cities.map((item, index) => {
              return <option value={index}>{item.city}</option>;
            })}
          </Form.Select>
        </div>
        <div className="date-section">
          <Form.Control
            type="date"
            min={today}
            max={lastDay}
            value={selectedDate}
            onChange={handleDateChange}
          ></Form.Control>
        </div>

        <div>
          <Button variant="warning" onClick={() => setShowTheatre(true)}>
            See Theatres
          </Button>
        </div>
      </div>

      <div style={styles}>
        <Theatres />
      </div>
    </div>
  );
}

function Theatres() {
  let[theatreName,setTheatreName] = useState("");

function handleSubmit(event){
event.preventDefault();
}

  return (
    <div className="theatre-container d-flex">
      <form className="theatrename-and-showtime d-flex" onSubmit={handleSubmit}>
        <div>
          <label>Theatre Name 1</label>
        </div>

        <div>
          <ShowsSection />
        </div>
        <Button variant="warning" type="submit">Confirm</Button>
      </form>
      <hr></hr>

      <form className="theatrename-and-showtime d-flex">
        <div>
          <label>Theatre Name 2</label>
        </div>
        <div>
          <ShowsSection />
        </div>
        <Button variant="warning" type="submit">Confirm</Button>
      </form>
      <hr></hr>

      <form className="theatrename-and-showtime d-flex">
        <div>
          <label>Theatre Name 3</label>
        </div>
        <div>
          <ShowsSection />
        </div>
        <Button variant="warning" type="submit">Confirm</Button>
      </form>
      <hr></hr>

      <form className="theatrename-and-showtime d-flex">
        <div>
          <label>Theatre Name 4</label>
        </div>
        <div>
          <ShowsSection />
        </div>
        <Button variant="warning" type="submit">Confirm</Button>
      </form>
      <hr></hr>

      <form className="theatrename-and-showtime d-flex">
        <div>
          <label>Theatre Name 5</label>
        </div>
        <div>
          <ShowsSection />
        </div>
        <Button variant="warning" type="submit">Confirm</Button>
      </form>
      <hr></hr>
    </div>
  );
}

function ShowsSection() {

  let [showTime, setShowTime] = useState("");
  function handleChange(event){
    setShowTime(event.target.value);
  }

  return (
    <div>
      <div className="shows d-flex">
        <div>
          <label>
            <input type="radio" value="10.30 AM" name="show-time" onChange={handleChange} />
            10.30 AM
          </label>
        </div>

        <div>
          <label>
            <input type="radio" value="01.30 PM" name="show-time" onChange={handleChange} />
            01.30 PM
          </label>
        </div>
        
        <div>
          <label>
            <input type="radio" value="04.30 PM" name="show-time" onChange={handleChange} />
            04.30 PM
          </label></div>
        
          <div>
          <label>
            <input type="radio" value="07.30 PM" name="show-time" onChange={handleChange} />
            07.30 PM
          </label>
        </div>
        </div>
    </div>
  );
}

function Construction(){
  return(
    <div className="construction">
            <img src="https://www.pngkey.com/png/full/441-4412134_page-under-construction-under-construction-sign-png.png" alt="Page under construction" />
            </div>
  )
}
export default App;
