import Allroutes from "./component/Allroutes";
import Menu from "./component/Menu";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./component/Footer";
import Toolbar from "./component/Toolbar";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>

      <main>
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
