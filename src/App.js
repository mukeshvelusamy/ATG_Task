import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Allpost from './components/Allpost';
import Login from './components/Login';

function App() {
  return (
    <div className="">
     <Navbar/>
     <Home/>
     <Allpost/>
     <Login/>
    </div>
  );
}

export default App;
