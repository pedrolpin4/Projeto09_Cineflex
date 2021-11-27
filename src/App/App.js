import './App.css';
import NavBar from '../NavBar/NavBar'
import MoviesList from '../MoviesList/MoviesList'
import TicketsSession from '../TicketsSession/TicketsSession'
import SessionsSeats from '../SessionsSeats/SessionsSeats';
import ConfirmationScreen from '../ConfirmationScreen/ConfirmationScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import  {useState } from 'react';

function App() {
  const [tickets, setTickets] = useState({
    buyer: {},
    seats: [],
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path = "/" exact component = {MoviesList} />
        <Route path = "/sessions/:movieId" exact component = {TicketsSession} />
        <Route path = "/seats/:sessionId" exact>
          <SessionsSeats setTickets = {setTickets} />
        </Route>
        <Route path = "/success" exact>
          <ConfirmationScreen tickets = {tickets}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
