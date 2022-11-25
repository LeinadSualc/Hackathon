import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Personagens } from './pages/Personagens';
import { Home } from './pages/Home';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />

                <Route 
                    path='/personagens'
                    element={<Personagens />}
                />

            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;