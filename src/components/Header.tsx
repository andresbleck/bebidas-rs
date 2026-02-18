import { useEffect, useMemo } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'
import type { FormEvent } from "react"
import { useState } from 'react'

export default function Header() {
    const [searchFilters, setSearchFilter] = useState({
        ingredient:'',
        category:''
    })
    const {pathname} = useLocation()
    const isHome = useMemo(() =>  pathname==='/',[pathname])

    const fetchCategories= useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state)=>state.categories)
    const searchRecipes = useAppStore((state=>state.searchRecipes))

    useEffect (() =>{
        fetchCategories()
    },[])

    const handleChangue = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) =>{
        setSearchFilter({
            ...searchFilters,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(searchFilters).includes("")) {
            console.log("Todos los campos son obligatorios")
            return
        }
    searchRecipes(searchFilters)
}

    return (
    <header className={isHome ? 'bg-header bg-center bg-cover':'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className='w-32' src="/public/logo.svg" alt="logotipo" />
                </div>
                <nav className='flex gap-4'>
                    <NavLink to="/" 
                    className={({ isActive }) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                    >Inicio</NavLink>

                    <NavLink to="/favoritos" 
                    className={({ isActive }) => 
                        isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                    >Favoritos </NavLink>
                </nav>

            </div>

            {isHome &&  (
                <form className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6' onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg '>Nombre o Ingredientes</label>
                        <input type="text" name="ingredient" id="ingredient" className='p-3 w-full rounded-lg focus:outline-none bg-white' placeholder='Nombre o Ingrediente. Ejemplo: Vodka, Tequila, Ron'
                        onChange={handleChangue}
                        value={searchFilters.ingredient}/>
                    </div>

                    <div className='space-y-4'>
                        <label htmlFor="category" className='block text-white uppercase font-extrabold text-lg '>Categoria</label>
                        <select  name="category" id="category" className='p-3 w-full rounded-lg focus:outline-none bg-white'
                        onChange={handleChangue}
                        value={searchFilters.category}>
                            <option value="">-- Seleccione --</option>
                            {categories?.drinks.map((category)=> (
                                <option
                                key={category.strCategory}
                                value={category.strCategory}>{category.strCategory}</option>
                            ))}
                        </select>
                    </div>

                    <input type="submit" value='Buscar recetas' className='cursor-pointer bg-orange-700 hover:bg-amber-800 text-white font-extrabold w-full p-2 rounded-lg uppercase'/>
                </form>
            )}
        </div>

    </header>
  )
}
