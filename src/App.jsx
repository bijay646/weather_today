import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HOME, WEATHER_DETAILS } from "./constants/routes";
import WeatherState from "./contextApi/WeatherState";

import Home from "./pages/Home/Home";
import WeatherDetails from "./pages/WeatherDetails/WeatherDetails";

function App() {
  return (
    <Router>
      <WeatherState>
        <Routes>
          <Route path={HOME.INDEX} element={<Home />} />
          <Route path={WEATHER_DETAILS.INDEX} element={<WeatherDetails />} />
        </Routes>
      </WeatherState>
    </Router>
  );
}

export default App;
