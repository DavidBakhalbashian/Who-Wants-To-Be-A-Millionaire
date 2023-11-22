import { Route, Routes } from "react-router-dom";
import Registr from "../pages/Registr/Registr";
import Game from "../pages/Game/Game";
import Lost from "../pages/Lost/Lost";
const Navigation =()=>{
    return(
<Routes>
<Route path="/" element={<Registr />}/>
<Route path="/game" element={<Game />}/>
<Route path="/lost" element={<Lost />}/>
</Routes>
    )
}

export {Navigation}