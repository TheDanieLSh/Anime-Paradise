import { Routes, Route } from "react-router-dom";
import GoodsList from "./GoodsList";
import Pages from "./Pages";

function Sections() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <div className="pageContent" data-main="true">
              <p>Novelties</p>
              <GoodsList goods="novelties" />
              <p>Hot</p>
              <GoodsList goods="hot" />
            </div>
          </>
        }
      />
      <Route
        path="/:section/:page_number"
        element={
          <>
            <div className="pageContent">
              <GoodsList />
              <Pages />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default Sections;
