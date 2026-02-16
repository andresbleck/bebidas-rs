import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './views/IndexPage'
import IndexPage from './views/IndexPage'
import FavoritePage from './views/FavoritePage'
import Layout from './layouts/Layout'
export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<IndexPage />} index/>
                <Route path='/favoritos' element={<FavoritePage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
