import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import  {createFavoriteSlice , type FavoriteSliceType} from './favoritesSlice'


export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))