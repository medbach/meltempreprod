import React, { Fragment, useEffect, useRef, useState } from 'react';
import Allroutes from "./component/Allroutes";
import Menu from "./component/Menu";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import Toolbar from "./component/Toolbar";
import Slider from "./component/Slider";

function App() {

  const [current, setcurrent] = useState(window.location.pathname);
  // const  pageCurrent = window.location.pathname;
  // pageCurrent.slice(0, window.location.pathname.lastIndexOf('/'));


  useEffect(() => {
    setcurrent(current.slice(0, window.location.pathname.lastIndexOf('/')));
  }, [current]);

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    }
    else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  console.log("length page current",current.length);
  console.log("page current",current)
  return (
    <div className={`App ${current}`}>

      <header className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} >
        <Menu />
      </header>
      <main>
        
        {/* {current.length > 1 ? ( <> </>) : (<> <Slider /> </>)} */}
       
        <Allroutes />
      </main>

      <footer>
        <Footer/>
      </footer>
      <Toolbar/>
    </div>
    
  );
}

export default App;
