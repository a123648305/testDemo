import { defineStore } from 'pinia'

export default defineStore('todos', {
  state: () => ({
    count: 0,
  }),
  getters: {
    count(state) {
      return state.count
    },
  },
  actions: {
    addTodo(num: number) {
      this.count = num
    },
  },
})
