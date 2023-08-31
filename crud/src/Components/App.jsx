import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CelularesCRUD from "./CelularesCRUD";
import CelularesFORM from "./CelularesFORM";
import Home from "./Home";
import JuegosCRUD from "./JuegosCRUD";
import JuegosFORM from "./JuegosFORM";
import NotFound from "./NotFound";

function App(){

    

    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/celulares" element={<CelularesCRUD />} />
                <Route path="/juegos" element={<JuegosCRUD />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;