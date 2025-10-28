import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <Router>
    <div className="">
      <Header />  

<Routes>

    <Route path="/Home" element={<Home />} />

</Routes>


    </div>
</Router>
    </>
  );
}
export default App;