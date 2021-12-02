
import './App.scss'
import FlightList from './Screens/Flights/FlightList';
import NavBar from './Component/NavBar/NavBar';
import Loader from './Component/Loader/Loader';

function App() {
  return (
    <>
    {/* <Loader/> */}
      <NavBar />
      <FlightList />
    </>
  );
}

export default App;
