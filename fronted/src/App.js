import React, {  useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Lk from './views/Lk';



function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
 


  const pages = {
      Main: <Main/>,
      Basket: <Basket />,
      Lk: <Lk/>
     }
  
     const modalBoxes = {
      none: null,
      Login: <ModalBox setModalBox={setModalBox}><Login/></ModalBox>,
      Registration: <ModalBox setModalBox={setModalBox}><Registration/></ModalBox>
     }
      
    
    
    

  return (
    <div className="App">
      <Header  setPage={ setPage } setModalBox={setModalBox}/> 
      { pages[page] }
      { modalBoxes[modalBox] }
      <Footer />
    </div>
  );
}

export default App;
