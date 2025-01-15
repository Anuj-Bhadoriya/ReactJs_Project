import Clockheading from "./components/clockheading";
import Currentslogan from "./components/currentslogan";
import Currenttime from "./components/currenttime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() { 
    return  (
      <div>
             
          
          <center>
            <Clockheading></Clockheading>
            <Currentslogan></Currentslogan>
            <Currenttime/>
          
          </center> 
          
      </div>
      
      );
      
};

export default App;
