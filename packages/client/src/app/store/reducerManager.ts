import { AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/store/types'
import { DevStore } from 'dev/components'

export interface ReducerManager<T>{
    getReducerMap: () => void,
    add: (key: keyof T, reducer: Reducer) => void,
    reduce: (state: T, action: AnyAction) => CombinedState<T>,
    remove: (key: keyof T) => void
}

type CreateReducerManager = (reducers: ReducersMapObject<StateSchema>) => ReducerManager<StateSchema>

export const createReducerManager: CreateReducerManager = (initialReducers) => {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: Array<keyof StateSchema> = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      DevStore.set(state)
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add: (key: keyof StateSchema, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: keyof StateSchema) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
