import {Routes, Route} from "react-router-dom";
import {path} from "./utils/constant";
import Home from "./containers/Public/Home";
import Login from "./containers/Public/Login";
import HomePage from "./containers/Public/HomePage";
import DetailPost from "./containers/Public/DetailPost";
import ChoThue from "./containers/Public/ChoThue";
import SearchDetail from "./containers/Public/SearchDetail";

function App() {
  return (
    <div className=" bg-greyPrimary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<ChoThue />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<ChoThue />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<ChoThue />} />
          <Route path={path.NHA_CHO_THUE} element={<ChoThue />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route
            path={path.DETAIL_POST__TITLE__POST_ID}
            element={<DetailPost />}
          />
          {/* <Route
            path={path.CHO_THUE_CAN_HO__DETAIL_POST__TITLE__POST_ID}
            element={<DetailPost />}
          /> */}
          <Route path={"chi-tiet/*"} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
