
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Beers from "../pages/Beers.jsx";
// import RandomBeer from "../components/RandomBeer.jsx";
import NewBeer from "../pages/New-Beer";
import BeerDetails from "../components/BeerDetails";
import RandomBeer from "../pages/Random-Beer";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/Beer/:beerId"element={<BeerDetails/>}/>
            <Route path="/New-Beer" element={<NewBeer />} />
            <Route path="/Random-Beer" element={<RandomBeer />} />
        </Routes>
    )
}
export default AppRoutes