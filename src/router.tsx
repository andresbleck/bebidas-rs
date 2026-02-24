import { BrowserRouter, Routes , Route } from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Layout from './layouts/Layout'
import GenerateAI from './views/GenerateIA'
const IndexPage =  lazy(() => import('./views/IndexPage'))
const FavoritePage =  lazy(() => import('./views/FavoritePage'))


export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={
                  <Suspense fallback="Cargando..">
                    <IndexPage />
                  </Suspense>
                } />
                <Route path='/favoritos' element={
                  <Suspense fallback="Cargando..">
                    <FavoritePage />
                  </Suspense>
                } />

                <Route path='/ia' element={<GenerateAI />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
