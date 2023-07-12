import {Routes, Route} from "react-router-dom";
import {path} from "./utils/constant";
import Home from "./containers/Public/Home";
import Login from "./containers/Public/Login";
import ChoThueCanHo from "./containers/Public/ChoThueCanHo";
import ChoThueMatBang from "./containers/Public/ChoThueMatBang";
import ChoThuePhongTro from "./containers/Public/ChoThuePhongTro.js";
import NhaChoThue from "./containers/Public/NhaChoThue";
import HomePage from "./containers/Public/HomePage";
import DetailPost from "./containers/Public/DetailPost";

function App() {
  return (
    <div className=" bg-greyPrimary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.HOME} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<ChoThueCanHo />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<ChoThueMatBang />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<ChoThuePhongTro />} />
          <Route path={path.NHA_CHO_THUE} element={<NhaChoThue />} />
          <Route
            path={path.DETAIL_POST__TITLE__POST_ID}
            element={<DetailPost />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
