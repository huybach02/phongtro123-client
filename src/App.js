import {Routes, Route} from "react-router-dom";
import {path} from "./utils/constant";
import Home from "./containers/Public/Home";
import Login from "./containers/Public/Login";

function App() {
  return (
    <div className="h-screen w-screen bg-greyPrimary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
