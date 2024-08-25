/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Meal } from 'src/entitites/Meal'
import api from './api'
import { type User } from 'src/entitites/User'
import { Recipe } from 'src/entitites/Recipe'

const mealService = {
  getMealByUserId: async (userId: string): Promise<Meal[]> => {
    try {
      const res = await api.get<Meal[]>(`/user/meals/${userId}`)
      return res.data
    } catch (error: any) {
      console.error(
        'Error fetching user meal by ID:',
        error.response?.data || error.message
      )
      throw error
    }
  },
  getRecipesByMeal: async (mealId: string): Promise<Recipe[]> => {
    try {
      const res = await api.get<Recipe[]>(`/user/meals/recipes/${mealId}`)
      return res.data
    } catch (error: any) {
      console.error(
        'Error fetching meal recipes by ID:',
        error.response?.data || error.message
      )
      throw error
    }
  }
}

export default mealService
