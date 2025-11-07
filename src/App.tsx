import { BrowserRouter as Router,Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <Router>
    <div className="">
      <Header />  
<Home />
<Routes>

    

</Routes>


    </div>
</Router>
    </>
  );
}
export default App;