import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import CommanToAllState from './context/CommanToAllState';
import HomePage from './components/HomePage';
import SpaceInformation from './components/SpaceInformation';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Events from './components/Events';
function App() {
  return (
    <>
    <CommanToAllState>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<HomePage/>}></Route>
          <Route exact path = "/information" element = {<SpaceInformation/>}></Route>
          <Route exact path='/chat' element={<Chat/>}></Route>
          <Route exact path= '/events' element={<Events/>}></Route>
        </Routes>
      </Router>
    </CommanToAllState>
    </>
  );
}

export default App;
