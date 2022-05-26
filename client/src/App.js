import Allroutes from "./component/Allroutes";
import Menu from "./component/Menu";
import "react-toastify/dist/ReactToastify.css";

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

      </footer>
      
    </div>
    
  );
}

export default App;
