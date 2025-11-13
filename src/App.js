import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <div className="NavBar">
    <Navbar title="PRIME GAMING" link="Discord" />
    </div>
    <br /><br />
    <div className="container">
      <TextForm heading="Enter your Desired Inputs here !!!"/>
    </div>

    
    <br /><br />
    </>
  );
}

export default App;
