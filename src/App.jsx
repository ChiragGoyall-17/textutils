import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
   const [mode, setMode] = useState('light'); //wheather dark mode is enable or nost
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
      setAlert({
         msg: message,
         type: type
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);

   }

   const removeBodyClasses = () =>{
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-info');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
   }

   const toggleMode = (cls) => {
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
     if(mode === 'light') {
       setMode('dark');
       document.body.style.backgroundColor = 'gray';
       showAlert("Dark mode has been enabled", "success");
      //  document.title = 'Textutils - Dark Mode';
     } else {
       setMode('light');
       document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      //   document.title = 'Textutils - Light Mode';
     }
   }
  
   return (
   //   <BrowserRouter basename="/textUtils">
       <BrowserRouter>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<div className="container my-3"><Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra space" mode={mode} /></div>} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
     </BrowserRouter>
  )
}

export default App
