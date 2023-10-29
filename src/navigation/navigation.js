import { Route, Routes } from "react-router-dom";
import Registr from "../pages/Registr/Registr";
import Game from "../pages/Game/Game";
const Navigation =()=>{
    return(
<Routes>
<Route path="/" element={<Registr />}/>
<Route path="/game" element={<Game />}/>
</Routes>
    )
}

export {Navigation}