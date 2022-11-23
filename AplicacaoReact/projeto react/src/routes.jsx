import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contato } from './pages/Contato';
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { ListarEmail } from './pages/ListarEmail';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/quemsomos'
                    element={<QuemSomos />}
                />
                <Route 
                    path='/contato'
                    element={<Contato />}
                />
                <Route 
                    path='/listagem'
                    element={<ListarEmail />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;