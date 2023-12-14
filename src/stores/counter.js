import { defineStore } from 'pinia'

export const useStoreData = defineStore('storeData', {
  state: () => {
    return { 
      count: 0 
    }
  }
})