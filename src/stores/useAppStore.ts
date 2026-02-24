import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice'
import  {createFavoriteSlice , type FavoriteSliceType} from './favoritesSlice'
import { createAISlice , type AISlice } from './aiSlice'
import {type  NotificationSliceType , createNotificationSlice } from './notificationSlice'


export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))