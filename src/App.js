
import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
        
    } else {
      setMode('light')
      
      }
  }
 
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={ toggleMode}/>
      <div className="container my-3">

        <TextForm heading="Enter the text to analyze below" />
       {/* <About /> */}
      </div>
    </>
  );
}

export default App;
