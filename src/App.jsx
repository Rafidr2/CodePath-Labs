import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Chicago 🏙️</h1>
      <h2 className="single-line">Welcome to Chicago, Natalia! Check out this calendar to get to know the city and see all sights during your stay.</h2>
      <Calendar />
    </div>
  )
}

export default App